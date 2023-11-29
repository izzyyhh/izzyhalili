'use client'
import { Signika_Negative } from 'next/font/google'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const signikaNegative = Signika_Negative({
    subsets: ['latin'],
    variable: '--font-signikaNegative',
})

export default function Header() {
    const GLITCH_CHARS = '`¡™£¢∞§¶•ªº–≠åß∂ƒ©˙∆˚¬…æ≈ç√∫˜µ≤≥÷/?░▒▓<>/'.split('')
    const ANIMATION_NAME = 'glitch-switch'

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

            <div className="flex flex-auto justify-start pl-8 items-center pb-8">
                <div className="z-10">
                    <h1
                        className={`${signikaNegative.variable}text-ghostwhite uppercase font-bold tracking-[0.5rem] text-4xl z-10 animate-fadeinfromleft w-[240px]`}
                    >
                        {'Ismail \\ Halili \\'.split('').map((c, i) => {
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
                                <span
                                    key={`${c}-${i}`}
                                    data-char={c}
                                    style={styles}
                                >
                                    {c}
                                </span>
                            )
                        })}
                    </h1>
                    <h2
                        className={`${signikaNegative.variable} w-[190px] mt-4 text-ghostwhite uppercase font-thin tracking-[0.5rem] text-2xl z-10 animate-fadeinfromleft`}
                    >
                        {'Software Engineer'.split('').map((c, i) => {
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
                                <span
                                    key={`${c}-${i}`}
                                    data-char={c}
                                    style={styles}
                                >
                                    {c}
                                </span>
                            )
                        })}
                    </h2>

                    <div className="socials mt-12">
                        <ul className="flex gap-4 flex-col animate-fadeinfromleft">
                            <li className="hover:cursor-pointer">
                                <a href="https://www.github.com/izzyyhh">
                                    <Image
                                        src="/github-mark.svg"
                                        height={32}
                                        width={32}
                                        alt="Github Logo"
                                        className="dark:invert contrast-[1000] "
                                        color="#000"
                                    />
                                </a>
                            </li>
                            <li className="hover:cursor-pointer">
                                <a href="https://www.linkedin.com/in/ismail-halili-46a2241b9">
                                    <Image
                                        src="/linkedin.svg"
                                        height={32}
                                        width={32}
                                        alt="LinkedIn Logo"
                                        className="dark:invert "
                                        color="#000"
                                    />
                                </a>
                            </li>
                            <li className="hover:cursor-pointer">
                                <a href="https://www.instagram.com/idoppelzy/">
                                    <Image
                                        src="/instagram.svg"
                                        height={32}
                                        width={32}
                                        alt="Instagram Logo"
                                        className="dark:invert "
                                        color="#000"
                                    />
                                </a>
                            </li>
                            <li className="hover:cursor-pointer">
                                <a href="https://twitter.com/devizzyhal">
                                    <Image
                                        src="/x.svg"
                                        height={32}
                                        width={32}
                                        alt="X Twitter Logo"
                                        className="dark:invert "
                                        color="#000"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div
                className={`${signikaNegative.variable} font-thin tracking-widest text-center py-8`}
            >
                <p className="animate-bounce">
                    {/* <span className="text-white">About Me &#9660;</span>  */}
                    <span className="text-white">🔨 Under construction</span>
                </p>
            </div>
        </header>
    )
}
// TODO: GLITCHY TEXT ALL 20 seconds or so !
