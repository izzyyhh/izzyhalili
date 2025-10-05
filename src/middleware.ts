// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PROTECTED_PREFIX = '/secret'
const AUTH_COOKIE = 'secret_auth'

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl

    // only guard the protected area
    if (pathname.startsWith(PROTECTED_PREFIX)) {
        const authed = req.cookies.get(AUTH_COOKIE)?.value === '1'
        if (!authed) {
            const url = req.nextUrl.clone()
            url.pathname = '/enter'
            url.searchParams.set('next', pathname) // come back after login
            return NextResponse.redirect(url)
        }
    }

    return NextResponse.next()
}

// limit the middleware matcher for performance
export const config = {
    matcher: ['/secret/:path*'],
}
