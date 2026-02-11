'use client'

import OurList from '../components/OurList'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import ListItemForm from '@/components/ui/ListItemForm'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function SecretPage() {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    return (
        <main
            className="min-h-screen w-screen flex flex-col absolute top-0 left-0 px-24 overflow-y-auto gap-4"
            style={{
                padding: '2rem',
                color: 'white',
                display: 'flex',
                zIndex: 50,
            }}
        >
            <div
                onClick={() => router.push('/marlenes-vday')}
                className="absolute top-5 right-2 z-50 animate-pulse animate-bounce"
            >
                <img src="/rose.gif" alt="rose" width={90} height={90} />
            </div>
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: 'url(/spiderlily.gif)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    zIndex: 0,
                }}
            ></div>

            <div
                className="absolute inset-0"
                style={{
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    zIndex: 1,
                }}
            ></div>

            <div className="relative z-10 flex justify-center flex-col">
                <Popover open={isOpen} onOpenChange={setIsOpen}>
                    <PopoverTrigger className="mx-auto">
                        <h1 className="text-2xl font-bold mb-10 text-center">
                            🔒 Auf die Liste 🔒
                        </h1>
                    </PopoverTrigger>
                    <PopoverContent>
                        <ListItemForm setIsOpen={setIsOpen}></ListItemForm>
                    </PopoverContent>
                </Popover>
                <div className="flex flex-col items-center w-full">
                    <OurList></OurList>
                </div>
            </div>
        </main>
    )
}
