import {
    ItemMedia,
    ItemContent,
    ItemTitle,
    ItemDescription,
    ItemActions,
    Item,
} from '@/components/ui/item'
import ListItemForm from '@/components/ui/ListItemForm'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { Portal } from '@radix-ui/react-popover'
import { EditIcon } from 'lucide-react'
import React, { useState } from 'react'

type ListItemProps = {
    id: number
    title: string
    description?: string
    icon?: string
}

export default function ListItem({
    id,
    title,
    description,
    icon,
}: ListItemProps) {
    const [isOpen, setIsOpen] = useState(false)

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
                    <Popover open={isOpen} onOpenChange={setIsOpen}>
                        <PopoverTrigger asChild>
                            <button className="py-1 pl-1">
                                <EditIcon size={'20px'}></EditIcon>
                            </button>
                        </PopoverTrigger>
                        <Portal>
                            <PopoverContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 max-w-[90%] max-h-[90%] overflow-auto bg-white shadow-lg rounded-lg p-4">
                                <ListItemForm
                                    setIsOpen={setIsOpen}
                                    item={{
                                        id,
                                        title,
                                        description,
                                        icon: icon || '',
                                    }}
                                ></ListItemForm>
                            </PopoverContent>
                        </Portal>
                    </Popover>
                </ItemActions>
            </Item>
        </div>
    )
}
