import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import axios from 'axios'
import { useEffect, useState } from 'react'

export function SpotifyCard() {
    const [track, setTrack] = useState<any>({})
    useEffect(() => {
        axios.get('/api/spotify').then((result: any) => {
            console.log(result)
            setTrack(result.data.track)
        })
    }, [])
    return (
        <Card>
            <CardHeader>
                <CardTitle>Currently Listening</CardTitle>
                <CardDescription>Add me on Spotify e4sy</CardDescription>
                <p>{track.name}</p>
            </CardHeader>
        </Card>
    )
}
