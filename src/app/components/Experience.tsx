'use client'

import { AnimatePresence, motion } from 'framer-motion'

export function Experience() {
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
            <p className="leading-7 [&:not(:first-child)]:mt-6">Worked here</p>
        </motion.section>
    )
}
