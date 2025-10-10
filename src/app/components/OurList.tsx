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

export default function OurList() {
    const { list, loadList, addItem, removeItem } = useOurListStore()

    useEffect(() => {
        loadList()
    }, [loadList])

    return (
        <>
            <ItemGroup className="gap-2">
                {list.map((item) => (
                    <ListItem
                        id={item.id}
                        title={item.title}
                        description={item.description || ''}
                        icon={item.icon}
                        key={item.id}
                    ></ListItem>
                ))}
                {/* <Item variant={'outline'}>
                    <ItemMedia variant={'icon'}>🤫</ItemMedia>
                    <ItemContent>
                        <ItemTitle>Moggen</ItemTitle>
                        <ItemDescription>
                            Gegenseitig moggen. Bye Bye!
                        </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                        <Button size="sm" variant="outline">
                            ...
                        </Button>
                    </ItemActions>
                </Item>

                <Item variant={'outline'}>
                    <ItemMedia variant={'icon'}>🌶️</ItemMedia>
                    <ItemContent>
                        <ItemTitle>Bequem auf der Rückbank</ItemTitle>
                        <ItemDescription>Da wirds heiß...</ItemDescription>
                    </ItemContent>
                    <ItemActions>
                        <Button size="sm" variant="outline">
                            ...
                        </Button>
                    </ItemActions>
                </Item> */}
            </ItemGroup>
        </>
    )
}
