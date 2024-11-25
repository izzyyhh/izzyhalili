import axios from 'axios'
import { NextResponse } from 'next/server'
import NodeCache from 'node-cache'

export const dynamic = 'force-dynamic'
const tokenCache = new NodeCache({ stdTTL: 1800 })

export async function GET(request: Request) {
    const access_token = await getToken()
    const currentlyResponse = await axios({
        url: 'https://api.spotify.com/v1/me/player/currently-playing',
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    })

    if (currentlyResponse.status === 204 || currentlyResponse.status > 400) {
        return NextResponse.json({ type: 'currently_playing', track: null })
    }

    return NextResponse.json({
        type: 'currently_playing',
        track: {
            name: currentlyResponse.data.item.name,
            preview: currentlyResponse.data.item.preview_url,
            artists: currentlyResponse.data.item.artists.map(
                (a: { name: string }) => a.name
            ),
            images: currentlyResponse.data.item?.album?.images || [],
        },
    })
}

async function getToken() {
    const cachedToken = tokenCache.get('spotify_access_token')
    if (cachedToken) {
        return cachedToken
    }

    const params = new URLSearchParams()

    params.append('client_id', process.env.SPOTIFY_CLIENT_ID as string)
    params.append('client_secret', process.env.SPOTIFY_CLIENT_SECRET as string)
    params.append('grant_type', 'refresh_token')
    params.append('redirect_uri', process.env.SPOTIFY_REDIRECT_URL as string)

    const response = await axios({
        url: 'https://accounts.spotify.com/api/token',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization:
                'Basic ' +
                Buffer.from(
                    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
                ).toString('base64'),
        },
        data: {
            grant_type: 'refresh_token',
            refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
            client_id: process.env.SPOTIFY_CLIENT_ID,
        },
    })

    tokenCache.set('spotify_access_token', response.data.access_token)

    return response.data.access_token
}

async function exchangeCodeForAccessAndRefreshToken(
    code: string
): Promise<any> {
    const params = new URLSearchParams()

    params.append('client_id', process.env.SPOTIFY_CLIENT_ID as string)
    params.append('client_secret', process.env.SPOTIFY_CLIENT_SECRET as string)
    params.append('grant_type', 'authorization_code')
    params.append('code', code)
    params.append('redirect_uri', process.env.SPOTIFY_REDIRECT_URL as string)

    const response = await axios({
        url: 'https://accounts.spotify.com/api/token',
        method: 'post',
        params,
    })

    console.log(response.data.access_token)
    console.log(response.data.refresh_token)
}
