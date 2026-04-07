'use client'

import React, { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

type HiddenTriggerProps = {
    children: ReactNode
    redirectTo?: string
    tapCount?: number
    resetMs?: number | null
}

export default function HiddenTrigger({
    children,
    redirectTo = '/enter',
    tapCount = 5,
    resetMs = 4000,
}: HiddenTriggerProps) {
    const router = useRouter()
    const [taps, setTaps] = useState(0)

    useEffect(() => {
        if (taps >= tapCount) router.push(redirectTo)
        if (taps > 0 && resetMs) {
            const t = setTimeout(() => setTaps(0), resetMs)
            return () => clearTimeout(t)
        }
    }, [taps, tapCount, redirectTo, router, resetMs])

    return (
        <span onClick={() => setTaps((n) => n + 1)} style={{ cursor: 'inherit' }}>
            {children}
        </span>
    )
}
