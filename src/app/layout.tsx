import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Izzy Halili',
    description:
        "Hello my name's Izzy, a software engineer living in Austria. I love to code and create software that either solves problems or that are cool to use.",
}

// TODO: think about if u really want a snap scroll fullpage stuff

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="text-white">{children}</body>
        </html>
    )
}
