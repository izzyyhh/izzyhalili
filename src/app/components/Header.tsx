'use client'
import { ModeToggle } from '@/components/darkmode-toggle'
import { motion } from 'framer-motion'
import { VisitCard } from './VisitCard'
import { SpotifyCard } from './SpotifyCard'

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
        <header className="w-full grid gap-6 grid-rows-header">
            <motion.div
                initial={{ opacity: 0, y: '-100%' }}
                animate={{ opacity: 1, y: 0 }}
                className=" flex justify-between items-center"
            >
                <p className={`uppercase font-bold tracking-[0.3rem] text-lg`}>
                    Izzy
                </p>
                <ModeToggle></ModeToggle>
            </motion.div>
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
                        I&apos;m a software engineer currently based in
                        Salzburg, Austria. While my primary focus is on
                        software, I also have strong knowledge in Human-Computer
                        Interaction and Data Science. I worked on the backend of
                        the{' '}
                        <a
                            href="https://www.runtastic.com/"
                            className="underline"
                        >
                            adidas Running
                        </a>{' '}
                        app, which has millions of users. I&apos;m contributing
                        to the next generation web site of the{' '}
                        <a href="https://www.vim.org/" className="underline">
                            vim editor
                        </a>
                        . I&apos;m excited to work on further impactful
                        projects.
                    </motion.p>
                </motion.div>
            </div>
            <div>
                <motion.div
                    style={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { duration: 0.4, delay: 1 },
                    }}
                    className="flex flex-col gap-3"
                >
                    <VisitCard />
                    <SpotifyCard />
                </motion.div>
            </div>
        </header>
    )
}
