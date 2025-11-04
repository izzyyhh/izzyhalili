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
import React, { useEffect } from 'react'
import ListItem from './ListItem'

type OurListProps = {
    onEdit?: (id: number) => void
}

export default function OurList({ onEdit }: OurListProps) {
    const { list, loadList, addItem, removeItem } = useOurListStore()

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
                        onEdit={onEdit}
                    ></ListItem>
                ))}
            </ItemGroup>
        </>
    )
}
