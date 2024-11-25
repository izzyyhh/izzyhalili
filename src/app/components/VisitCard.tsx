import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    GitHubLogoIcon,
    LinkedInLogoIcon,
    TwitterLogoIcon,
} from '@radix-ui/react-icons'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import Image from 'next/image'

export function VisitCard() {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                    <motion.div
                        animate={{
                            rotate: [45, 405],
                            borderRadius: ['0.25rem', '0.5rem', '0.25rem'],
                            transition: {
                                duration: 0.8,
                                repeat: Infinity,
                                delay: 1,
                                repeatDelay: 6,
                            },
                        }}
                        className="border-4 border-zinc-950 dark:border-zinc-100 rounded text-zinc-200 w-[1rem] h-[1rem]"
                    ></motion.div>
                    <motion.p
                        animate={{
                            scaleX: [1, 1.05, 1],
                            transition: {
                                type: 'tween',
                                duration: 0.65,
                                delay: 1.5,
                                repeat: Infinity,
                                repeatDelay: 6,
                            },
                        }}
                        className="uppercase tracking-[0.3rem]"
                    >
                        Izzy
                    </motion.p>
                </div>
                <CardTitle>Ismail Halili, MSc</CardTitle>
                <CardDescription>Software Engineer</CardDescription>
                <div className="flex gap-2 pt-1 pb-1 items-center">
                    <a href="mailto:izzy@izzyhalili.com">
                        <Mail></Mail>
                    </a>
                    <a href="https://github.com/izzyyhh">
                        <GitHubLogoIcon width={24} height={24}></GitHubLogoIcon>
                    </a>
                    <a href="https://www.linkedin.com/in/ismail-halili-46a2241b9/">
                        <LinkedInLogoIcon
                            width={24}
                            height={24}
                        ></LinkedInLogoIcon>
                    </a>
                    <a href="https://x.com/devizzyhal">
                        <Image
                            src={'/x.svg'}
                            width={22}
                            height={22}
                            alt="X logo"
                        ></Image>
                    </a>
                </div>
            </CardHeader>
        </Card>
    )
}
