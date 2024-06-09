'use client'
import { Signika_Negative } from 'next/font/google'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const signikaNegative = Signika_Negative({
    subsets: ['latin'],
    variable: '--font-signikaNegative',
})

export default function Header() {
    return (
        <header className="min-h-screen w-full bg-nightblack flex flex-col overflow-hidden">
            <div className="p-8 flex justify-between items-center">
                <p
                    className={`${signikaNegative.variable} text-ghostwhite uppercase font-bold tracking-[0.3rem] text-lg`}
                >
                    Izzy
                </p>
                <button className="w-8 h-3">
                    <div className="h-full flex flex-col justify-between">
                        <div className="h-[2px] w-full bg-ghostwhite"></div>
                        <div className="h-[2px] w-[80%] bg-ghostwhite ml-auto"></div>
                    </div>
                </button>
            </div>
        </header>
    )
}
