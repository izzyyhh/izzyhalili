'use client'
import { motion } from 'framer-motion'

export function AboutMe() {
    return (
        <motion.section
            style={{ y: 50, opacity: 0 }}
            animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.4, delay: 0.8, type: 'tween' },
            }}
        >
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                /About me
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                I am currently pursuing a{' '}
                <u>Master of Science in Engineering</u> at the{' '}
                <a href="https://www.fh-salzburg.ac.at/en/about-fh-salzburg/about-us">
                    <strong>University of Applied Sciences Salzburg</strong>
                </a>
                . Previously, I interned at <strong>adidas</strong> Runtastic,
                where I contributed to the backend for the{' '}
                <a href="https://www.runtastic.com/" className="underline">
                    adidas Running
                </a>{' '}
                app, serving millions of users with high-scale.
            </p>
            <div>
                <p className="leading-7 mt-3">
                    My journey into software engineering began at the age of 17,
                    and has since led me to explore various frameworks and
                    programming languages. The following ones are currently my
                    favorites:
                </p>
                <div className="flex text-sm gap-4">
                    <ul className="my-6 ml-6 list-disc [&>li]:mt-1 ">
                        <li>Go</li>
                        <li>JavaScript/TypeScript</li>
                        <li>Python</li>
                    </ul>

                    <ul className="my-6 ml-6 list-disc [&>li]:mt-1">
                        <li>Java/Kotlin</li>
                        <li>Ruby</li>
                        <li>C#</li>
                    </ul>
                </div>
            </div>
            <p className="leading-7 [&:not(:first-child)]:mt-3">
                Outside of academics and work, I am passionate about software
                engineering and enjoy watching content related to it on Twitch
                and YouTube. In my leisure time, I enjoy sports, anime,
                traveling, playing video games and occasionally creating content
                on TikTok.
            </p>
        </motion.section>
    )
}
