'use client'

import { Button } from '@/components/ui/button'
import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemGroup,
    ItemMedia,
    ItemTitle,
} from '@/components/ui/item'
import { useOurListStore } from '@/lib/stores/OurListStore'
import OurList from '../components/OurList'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import ListItemForm from '@/components/ui/ListItemForm'
import { useState } from 'react'
import { ListItem } from '../api/ourlist/route'

export default function SecretPage() {
    const { list, loadList, addItem, removeItem, updateItem } =
        useOurListStore()
    const [isOpen, setIsOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState<ListItem | null>(null)

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
                    <PopoverContent
                        onInteractOutside={() => {
                            setSelectedItem(null)
                        }}
                    >
                        <ListItemForm
                            setIsOpen={setIsOpen}
                            item={selectedItem}
                            setItem={setSelectedItem}
                        ></ListItemForm>
                    </PopoverContent>
                </Popover>
                <div className="flex flex-col items-center w-full">
                    <OurList
                        onEdit={(id) => {
                            const item = list.find((item) => item.id === id)
                            if (item) {
                                setSelectedItem(item)
                                setIsOpen(true)
                            }
                        }}
                    ></OurList>
                </div>
            </div>
        </main>
    )
}
