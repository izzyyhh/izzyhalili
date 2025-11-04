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
    onEdit?: (id: number) => void
}

import React from 'react'

export default function ListItem({
    id,
    title,
    description,
    icon,
    onEdit,
}: ListItemProps) {
    return (
        <div className="flex w-full max-w-xl flex-col gap-6">
            <Item variant={'outline'} className="min-h-[80px]">
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
                    <button
                        className="py-1 pl-1"
                        onClick={() => {
                            if (onEdit) onEdit(id)
                        }}
                    >
                        <EditIcon size={'20px'}></EditIcon>
                    </button>
                </ItemActions>
            </Item>
        </div>
    )
}
