'use client'

import React, {
    cloneElement,
    isValidElement,
    ReactElement,
    useEffect,
    useState,
} from 'react'
import { useRouter } from 'next/navigation'

type HiddenTriggerProps = {
    children: ReactElement<any> // accept any element
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

    if (!isValidElement(children)) {
        return children as unknown as ReactElement
    }

    const childOnClick = (children.props as any).onClick as
        | React.MouseEventHandler
        | undefined

    const handleClick: React.MouseEventHandler = (e) => {
        setTaps((n) => n + 1)
        childOnClick?.(e)
    }

    return cloneElement(children, { onClick: handleClick } as any)
}
