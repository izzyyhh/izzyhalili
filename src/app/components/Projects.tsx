'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AnimatePresence, motion } from 'framer-motion'
import { SetStateAction, useEffect, useState } from 'react'
import { ArmedForces } from './experience/armedforces'
import { Adidas } from './experience/adidas'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent, CardDescription } from '@/components/ui/card'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { Link } from 'lucide-react'

export function Projects() {
    const projects = [
        {
            title: 'YouRadio',
            description: 'Enjoy listening to music together',
            image: '/youradio.jpeg',
            gh: 'https://github.com/izzyyhh/youradio',
            yt: '',
            url: '',
        },
        {
            title: 'Dast - Decide fast',
            description: 'Quick, fair, and easy group decision-making',
            image: '/dast_e.jpg',
            gh: 'https://github.com/izzyyhh/decision',
            url: 'https://decision.projects.multimediatechnology.at/',
        },
        {
            title: 'Pixed',
            description:
                'Share your memories with friends and loved ones in the easiest way possible',
            image: '/pixed_screen_e.jpg',
            url: 'https://pixed.cloud',
        },
    ]
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
            }}
        >
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                /Projects
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6 pb-4">
                All kinds of projects: pet projects, bachelor&apos;s and
                master&apos;s projects, fun projects, etc. Many more on my{' '}
                <a className="underline" href="https://github.com/izzyyhh">
                    GitHub
                </a>
                .
            </p>
            <div>
                <div className="flex justify-center">
                    <Carousel
                        className="w-full max-w-md relative"
                        opts={{ loop: true }}
                        plugins={[
                            Autoplay({
                                delay: 6000,
                                stopOnInteraction: false,
                                stopOnMouseEnter: true,
                            }),
                        ]}
                    >
                        <CarouselContent>
                            {projects.map((p, index) => (
                                <CarouselItem key={index} className="">
                                    <div className="p-1">
                                        <Card className=" overflow-clip">
                                            <CardContent className="relative flex items-center aspect-video justify-center p-6 flex-col">
                                                {p.title === 'Pixed' ? (
                                                    <img
                                                        className="absolute z-0 brightness-[35%] object-bottom"
                                                        alt={p.title}
                                                        src={p.image}
                                                    ></img>
                                                ) : (
                                                    <img
                                                        className="absolute z-0 brightness-[45%] object-bottom"
                                                        alt={p.title}
                                                        src={p.image}
                                                    ></img>
                                                )}

                                                <h3 className="z-10 scroll-m-20 text-2xl font-semibold tracking-tight text-zinc-50">
                                                    {p.title}
                                                </h3>
                                                <small className="z-10 text-zinc-50 text-center max-w-[80%]">
                                                    {p.description}
                                                </small>
                                                <div className="position absolute text-white z-10 bottom-0 flex justify-between pb-4 items-center gap-2">
                                                    {p.gh && (
                                                        <a
                                                            href={p.gh}
                                                            className="hover:opacity-80"
                                                        >
                                                            <GitHubLogoIcon
                                                                width={24}
                                                                height={24}
                                                            ></GitHubLogoIcon>
                                                        </a>
                                                    )}

                                                    {p.url && (
                                                        <a
                                                            className="hover:opacity-80"
                                                            href={p.url}
                                                        >
                                                            <Link
                                                                width={20}
                                                                height={20}
                                                            ></Link>
                                                        </a>
                                                    )}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious
                            variant={'ghost'}
                            className="absolute mt-auto left-2 text-zinc-400"
                        />
                        <CarouselNext
                            variant={'ghost'}
                            className="absolute mt-auto right-2 text-zinc-400"
                        />
                    </Carousel>
                </div>
                <h3 className="scroll-m-20 text-2xl mt-6 font-semibold tracking-tight">
                    More projects
                </h3>
                <div className="grid grid-cols-2 gap-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => {
                        console.log('he')
                        return (
                            <Card className="aspect-square" key={i}>
                                <h4>Project</h4>
                                <CardDescription>Oh</CardDescription>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </motion.section>
    )
}
