'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AnimatePresence, motion } from 'framer-motion'
import { SetStateAction, useEffect, useState } from 'react'
import { ArmedForces } from './experience/armedforces'
import { Adidas } from './experience/adidas'

export function Projects() {
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
                <div>carousel</div>
                <div>grid</div>
            </div>
        </motion.section>
    )
}
