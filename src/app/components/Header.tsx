'use client'
import { ModeToggle } from '@/components/darkmode-toggle'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { useState } from 'react'

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
                <motion.div animate={{}}>
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                                <motion.div
                                    animate={{
                                        rotate: [45, 405],
                                        borderRadius: [
                                            '0.25rem',
                                            '0.5rem',
                                            '0.25rem',
                                        ],
                                        transition: {
                                            duration: 0.8,
                                            repeat: Infinity,
                                            repeatDelay: 8,
                                        },
                                    }}
                                    className="border-4 border-zinc-950 dark:border-zinc-100 rounded text-zinc-200 w-[1rem] h-[1rem]"
                                ></motion.div>
                                <motion.p
                                    animate={{
                                        fontWeight: [400, 600, 400],
                                        scaleX: [1, 1.05, 1],
                                        transition: {
                                            type: 'tween',
                                            duration: 0.6,
                                            delay: 0.4,
                                            repeat: Infinity,
                                            repeatDelay: 8,
                                        },
                                    }}
                                    className="uppercase tracking-[0.3rem]"
                                >
                                    Izzy
                                </motion.p>
                            </div>
                            <CardTitle>Ismail Halili, BSc.</CardTitle>
                            <CardDescription>
                                Masters student @ FHS (UAS Salzburg)
                            </CardDescription>
                            <div className="flex gap-2 pt-1 pb-1">
                                <a href="mailto:izzy@izzyhalili.com">
                                    <Mail></Mail>
                                </a>
                                <a href="https://github.com/izzyyhh">
                                    <GitHubLogoIcon
                                        width={24}
                                        height={24}
                                    ></GitHubLogoIcon>
                                </a>
                                <a href="https://www.linkedin.com/in/ismail-halili-46a2241b9/">
                                    <LinkedInLogoIcon
                                        width={24}
                                        height={24}
                                    ></LinkedInLogoIcon>
                                </a>
                            </div>
                        </CardHeader>
                    </Card>
                </motion.div>
            </div>
        </header>
    )
}
