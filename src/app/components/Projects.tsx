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
import { FolderKanbanIcon, Link } from 'lucide-react'

export function Projects() {
    const projects = [
        {
            title: 'YouRadio',
            description: 'Enjoy listening to music together',
            image: '/youradio.jpeg',
            gh: 'https://github.com/izzyyhh/youradio',
            tech: 'JS, RoR, React',
            yt: '',
            url: '',
        },
        {
            title: 'Dast - Decide fast',
            description: 'Quick, fair, and easy group decision-making',
            image: '/dast_e.jpg',
            gh: 'https://github.com/izzyyhh/decision',
            url: 'https://decision.projects.multimediatechnology.at/',
            tech: 'TS, NestJS, Firebase, React',
        },
        {
            title: 'Pixed',
            description:
                'Share your memories with friends and loved ones in the easiest way possible',
            image: '/pixed_screen_e.jpg',
            url: 'https://pixed.cloud',
            tech: 'TS, AWS, React',
        },
    ]

    const moreProjects = [
        {
            title: 'Bookommender',
            description:
                'A recommender system that recommends books for users through collaborative filtering and factorization machine.',
            gh: 'https://github.com/izzyyhh/league_items_solr_react_app',
            tech: 'Python, FM, React',
        },
        {
            title: 'Pokédex',
            description:
                'An Android Pokédex app that displays information about Pokémon. Add your favorite Pokémon to your list!',
            gh: 'https://github.com/izzyyhh/bookrecommender',
            tech: 'Kotlin, Jetpack Compose',
        },
        {
            title: 'League Items Search',
            description:
                'A web search app that provides you with information about League items. Search and filter for items as you need.',
            gh: 'https://github.com/izzyyhh/league_items_solr_react_app',
            tech: 'TypeScript, Apache Solr, React',
        },
        {
            title: 'Anime Quotes',
            description:
                'A progressive web app with an Anime Quotes feed, where you can like quotes and save them.',
            gh: 'https://github.com/izzyyhh/league_items_solr_react_app',
            tech: 'JavaScript, Service Workers',
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
            <div className="flex flex-col items-center">
                <div className="flex justify-center max-w-[90vw]">
                    <Carousel
                        className="w-full max-w-md relative"
                        opts={{ loop: true }}
                        plugins={[
                            Autoplay({
                                delay: 6000,
                                stopOnInteraction: true,
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
                                                <p className="z-10 opacity-50 text-center text-[0.7rem] mt-[0.1rem] text-white">
                                                    {p.tech}
                                                </p>
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
                <div className="self-start w-full">
                    <h3 className="scroll-m-20 text-2xl mt-6 pb-4 font-semibold tracking-tight">
                        More projects
                    </h3>
                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
                        {moreProjects.map((p, i) => {
                            return (
                                <Card className="p-4 pb-8" key={i}>
                                    <div className="flex justify-between pb-2">
                                        <FolderKanbanIcon
                                            opacity={0.7}
                                            width={24}
                                        ></FolderKanbanIcon>
                                        <div className="flex justify-between gap-2">
                                            {p.gh && (
                                                <a
                                                    href={p.gh}
                                                    className="opacity-70 transition-opacity hover:opacity-100"
                                                >
                                                    <GitHubLogoIcon
                                                        width={24}
                                                        height={24}
                                                    ></GitHubLogoIcon>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                                        {p.title}
                                    </h4>
                                    <p className="text-sm">{p.tech}</p>
                                    <CardDescription className="pt-2 mt-auto mb-auto">
                                        {p.description}
                                    </CardDescription>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </div>
        </motion.section>
    )
}
