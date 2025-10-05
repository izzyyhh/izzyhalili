// app/enter/page.tsx
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

async function unlock(formData: FormData) {
    'use server'
    const pass = formData.get('password')?.toString() ?? ''
    const next = '/secret'
    const ok = pass === process.env.MARLE_SECRET_PASSWORD

    if (!ok) {
        redirect(`/enter?error=1`)
    }

    // set HttpOnly cookie so client JS can't read it
    cookies().set('secret_auth', '1', {
        httpOnly: true,
        sameSite: 'lax',
        secure: true,
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // eine woche?
    })

    redirect(next)
}

export default function EnterPage({
    searchParams,
}: {
    searchParams: { next?: string; error?: string }
}) {
    const error = searchParams?.error === '1'

    return (
        <main className="mx-auto max-w-sm p-6">
            <h1 className="scroll-m-20 text-center text-2xl font-extrabold tracking-tight text-balance">
                800er ✊🥊
            </h1>
            {error && (
                <p className="mb-3 text-sm text-red-600">
                    Wrong password. Try again.
                </p>
            )}
            <form action={unlock} className="space-y-3">
                <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    autoFocus
                />
                <Button type="submit" className="w-full">
                    Unlock
                </Button>
            </form>
        </main>
    )
}
