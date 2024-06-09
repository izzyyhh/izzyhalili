'use client'
import { ModeToggle } from '@/components/darkmode-toggle'
import { motion } from 'framer-motion'

export default function Header() {
    const containerVariants = {
        visible: {
            transition: {
                staggerChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <header className="min-h-screen w-full bg-zinc dark:bg-zinc-950 p-4 grid grid-rows-header">
            <div className=" flex justify-between items-center">
                <p className={`uppercase font-bold tracking-[0.3rem] text-lg`}>
                    Izzy
                </p>
                <ModeToggle></ModeToggle>
            </div>
            <div className="self-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="h-container flex flex-col"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl "
                        whileTap={{ scale: 1.05 }}
                    >
                        Hey, I am Izzy
                    </motion.h1>
                    <motion.h4
                        variants={itemVariants}
                        className="scroll-m-20 text-xl font-light tracking-tight pt-2"
                    >
                        And I develop software
                    </motion.h4>
                    <motion.p
                        variants={itemVariants}
                        className="leading-7 [&:not(:first-child)]:mt-6"
                    >
                        I am a software engineer based in Salzburg, Austria. My
                        primary focus is on software engineering, but I also
                        have good experience in HCI and data science. I&apos;m
                        looking forward to working on impactful projects.
                    </motion.p>
                </motion.div>
            </div>
            <div>
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    TBD
                </h2>
            </div>
        </header>
    )
}
