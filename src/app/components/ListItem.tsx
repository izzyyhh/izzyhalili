import { Button } from '@/components/ui/button'
import {
    ItemMedia,
    ItemContent,
    ItemTitle,
    ItemDescription,
    ItemActions,
    Item,
} from '@/components/ui/item'
import { EditIcon } from 'lucide-react'

type ListItemProps = {
    id: number
    title: string
    description?: string
    icon?: string
}

import React from 'react'

export default function ListItem({
    id,
    title,
    description,
    icon,
}: ListItemProps) {
    return (
        <Item variant={'outline'}>
            <input type="hidden" name="id" value={id} />
            {icon ? (
                <ItemMedia>
                    <span className="text-2xl">{icon}</span>
                </ItemMedia>
            ) : (
                <ItemMedia>🤫</ItemMedia>
            )}
            <ItemContent>
                <ItemTitle className="text-lg">{title}</ItemTitle>
                {description && (
                    <ItemDescription>{description}</ItemDescription>
                )}
            </ItemContent>
            <ItemActions>
                <Button size="sm">
                    <EditIcon></EditIcon>
                </Button>
            </ItemActions>
        </Item>
    )
}
