'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AnimatePresence, motion } from 'framer-motion'
import { SetStateAction, useEffect, useState } from 'react'
import { ArmedForces } from './experience/armedforces'
import { Adidas } from './experience/adidas'

export function Experience() {
    const [selectedTab, setSelectedTab] = useState('adidas')

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
                defaultValue="adidas"
                onValueChange={(value) => handleTabChange(value)}
                className="w-full"
            >
                <TabsList>
                    <TabsTrigger value="adidas">00. adidas</TabsTrigger>
                    <TabsTrigger value="aaf">
                        01. Austrian Armed Forces
                    </TabsTrigger>
                </TabsList>
                <AnimatePresence mode="wait">
                    {selectedTab === 'aaf' && (
                        <motion.div
                            key="aaf"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.4 }}
                        >
                            <ArmedForces />
                        </motion.div>
                    )}

                    {selectedTab === 'adidas' && (
                        <motion.div
                            key="adidas"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.4 }}
                        >
                            <Adidas />
                        </motion.div>
                    )}
                </AnimatePresence>
            </Tabs>
        </motion.section>
    )
}
