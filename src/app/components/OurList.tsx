'use client'
import { ItemGroup } from '@/components/ui/item'
import { useOurListStore } from '@/lib/stores/OurListStore'
import React, { useEffect } from 'react'
import ListItem from './ListItem'

type OurListProps = {}

export default function OurList({}: OurListProps) {
    const { list, loadList } = useOurListStore()

    useEffect(() => {
        loadList()
    }, [loadList])

    return (
        <>
            <ItemGroup className="w-full flex flex-col items-center gap-2">
                {list.map((item) => (
                    <ListItem
                        id={item.id}
                        title={item.title}
                        description={item.description || ''}
                        icon={item.icon}
                        key={item.id}
                    ></ListItem>
                ))}
            </ItemGroup>
        </>
    )
}
