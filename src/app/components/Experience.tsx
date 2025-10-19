'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AnimatePresence, motion } from 'framer-motion'
import { SetStateAction, useEffect, useState } from 'react'
import { ArmedForces } from './experience/armedforces'
import { Adidas } from './experience/adidas'
import { LandSalzburg } from './experience/landsalzburg'

export function Experience() {
    const [selectedTab, setSelectedTab] = useState('ldsbg')

    const handleTabChange = (value: SetStateAction<string>) => {
        setSelectedTab(value)
    }

    useEffect(() => {
        console.log(selectedTab)
    }, [selectedTab])

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
                /Experience
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6 pb-4">
                The following lists my working experience. No open source or
                side projects included. You can find me on{' '}
                <a
                    className="underline"
                    href="https://www.linkedin.com/in/ismail-halili-46a2241b9/"
                >
                    LinkedIn
                </a>
                .
            </p>

            <Tabs
                defaultValue="ldsbg"
                onValueChange={(value) => handleTabChange(value)}
                className="w-full"
            >
                {/* ---------- CLEAN MULTI-ROW TABS ---------- */}
                <div className="min-w-0 w-full">
                    <TabsList
                        /* override shadcn's 'inline-flex h-10 rounded bg-muted p-1 ...' */
                        className="
              flex flex-wrap
              w-full
              gap-x-2 gap-y-2
              p-0
              bg-transparent
              rounded-none
              h-auto
            "
                    >
                        {/* Each trigger as its own 'chip' so wrapping looks intentional */}
                        <TabsTrigger
                            value="ldsbg"
                            className="
                h-9 px-3
                rounded-full
                border
                bg-background
                shadow-sm
                text-sm leading-none
                whitespace-nowrap
                data-[state=active]:bg-primary
                data-[state=active]:text-primary-foreground
                data-[state=active]:border-primary
              "
                        >
                            00. Land Salzburg
                        </TabsTrigger>

                        <TabsTrigger
                            value="adidas"
                            className="
                h-9 px-3
                rounded-full
                border
                bg-background
                shadow-sm
                text-sm leading-none
                whitespace-nowrap
                data-[state=active]:bg-primary
                data-[state=active]:text-primary-foreground
                data-[state=active]:border-primary
              "
                        >
                            01. adidas
                        </TabsTrigger>

                        <TabsTrigger
                            value="aaf"
                            className="
                h-9 px-3
                rounded-full
                border
                bg-background
                shadow-sm
                text-sm leading-none
                whitespace-nowrap
                data-[state=active]:bg-primary
                data-[state=active]:text-primary-foreground
                data-[state=active]:border-primary
              "
                        >
                            02. Austrian Armed Forces
                        </TabsTrigger>
                    </TabsList>
                </div>

                {/* ---------- CONTENT (unchanged) ---------- */}
                <AnimatePresence mode="wait">
                    {selectedTab === 'aaf' && (
                        <motion.div
                            key="aaf"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{
                                duration: 0.2,
                                type: 'tween',
                                ease: 'easeOut',
                            }}
                        >
                            <ArmedForces />
                        </motion.div>
                    )}

                    {selectedTab === 'adidas' && (
                        <motion.div
                            key="adidas"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{
                                duration: 0.2,
                                type: 'tween',
                                ease: 'easeOut',
                            }}
                        >
                            <Adidas />
                        </motion.div>
                    )}

                    {selectedTab === 'ldsbg' && (
                        <motion.div
                            key="ldsbg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{
                                duration: 0.2,
                                type: 'tween',
                                ease: 'easeOut',
                            }}
                        >
                            <LandSalzburg />
                        </motion.div>
                    )}
                </AnimatePresence>
            </Tabs>
        </motion.section>
    )
}
