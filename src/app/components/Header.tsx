'use client'
import { Signika_Negative } from 'next/font/google'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const signikaNegative = Signika_Negative({
    subsets: ['latin'],
})

export default function Header() {
    const GLITCH_CHARS = '`¡™£¢∞§¶•ªº–≠åß∂ƒ©˙∆˚¬…æ≈ç√∫˜µ≤≥÷/?░▒▓<>/'.split('')
    const ANIMATION_NAME = 'glitch-switch'

    return (
        <header className=" h-screen w-full bg-nightblack flex flex-col overflow-hidden">
            <div className="p-8 flex justify-between items-center">
                <p
                    className={`${signikaNegative.className} text-ghostwhite uppercase font-bold tracking-[0.3rem] text-lg`}
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

            <div className="flex flex-auto gap-2">
                <div className="animate-fadeinfromleft w-5/12 relative">
                    <div className="imgbox w-[550px] absolute left-[-270px]">
                        <img
                            src="/me.png"
                            alt="person, Ismail Halili"
                            className=" contrast-[1.5] opacity-[0.2]"
                        />
                    </div>
                </div>

                <div className="z-10">
                    <h1
                        className={`${signikaNegative.className} mt-24 text-ghostwhite uppercase font-bold tracking-[0.5rem] text-4xl z-10 animate-fadeinfromright max-w-[11ch]`}
                    >
                        {'Ismail \\ Halili \\'.split('').map((c) => {
                            let styles = Array.from(
                                { length: 10 },
                                (_, index) => ({
                                    [`--char-${index}`]: `"${
                                        GLITCH_CHARS[
                                            Math.floor(
                                                Math.random() *
                                                    GLITCH_CHARS.length
                                            )
                                        ]
                                    }"`,
                                })
                            ).reduce((acc, curr) => ({ ...acc, ...curr }), {})

                            styles = {
                                ...styles,
                                '--animation-name': ANIMATION_NAME,
                            }

                            return (
                                <span key={c} data-char={c} style={styles}>
                                    {c}
                                </span>
                            )
                        })}
                    </h1>
                    <h2
                        className={`${signikaNegative.className} max-w-[14ch] mt-4 text-ghostwhite uppercase font-thin tracking-[0.5rem] text-2xl z-10 animate-fadeinfromright`}
                    >
                        {'Software Engineer'.split('').map((c) => {
                            let styles = Array.from(
                                { length: 10 },
                                (_, index) => ({
                                    [`--char-${index}`]: `"${
                                        GLITCH_CHARS[
                                            Math.floor(
                                                Math.random() *
                                                    GLITCH_CHARS.length
                                            )
                                        ]
                                    }"`,
                                })
                            ).reduce((acc, curr) => ({ ...acc, ...curr }), {})

                            styles = {
                                ...styles,
                                '--animation-name': ANIMATION_NAME,
                            }

                            return (
                                <span key={c} data-char={c} style={styles}>
                                    {c}
                                </span>
                            )
                        })}
                    </h2>

                    <div className="socials mt-12">
                        <ul className="flex gap-4 flex-col animate-fadeinfromright">
                            <li>
                                <Image
                                    src="/github-mark.svg"
                                    height={32}
                                    width={32}
                                    alt="Github Logo"
                                    className="dark:invert contrast-[1000]"
                                    color="#000"
                                />
                            </li>
                            <li>
                                <Image
                                    src="/linkedin.svg"
                                    height={32}
                                    width={32}
                                    alt="LinkedIn Logo"
                                    className="dark:invert"
                                    color="#000"
                                />
                            </li>
                            <li>
                                <Image
                                    src="/instagram.svg"
                                    height={32}
                                    width={32}
                                    alt="Instagram Logo"
                                    className="dark:invert"
                                    color="#000"
                                />
                            </li>
                            <li>
                                <Image
                                    src="/x.svg"
                                    height={32}
                                    width={32}
                                    alt="X Twitter Logo"
                                    className="dark:invert"
                                    color="#000"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div
                className={`${signikaNegative.className} font-thin tracking-widest text-center py-8`}
            >
                <button className="animate-bounce">
                    <span>About Me</span>&#9660;
                </button>
            </div>
        </header>
    )
}
// TODO: GLITCHY TEXT ALL 20 seconds or so !
