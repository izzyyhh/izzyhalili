import { Badge } from '@/components/ui/badge'
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
import { useOurListStore } from '@/lib/stores/OurListStore'
import { cn } from '@/lib/utils'
import { Portal } from '@radix-ui/react-popover'
import { BadgeCheckIcon, CheckIcon, EditIcon, TurtleIcon } from 'lucide-react'
import React, { useState } from 'react'

type ListItemProps = {
    id: number
    title: string
    description?: string
    icon?: string
    checked?: boolean
}

export default function ListItem({
    id,
    title,
    description,
    icon,
    checked,
}: ListItemProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [lastTap, setLastTap] = useState(0)
    const { updateItem } = useOurListStore()

    const handleDoubleTap = () => {
        const currentTime = new Date().getTime()
        const tapLength = currentTime - lastTap
        if (tapLength < 300 && tapLength > 0) {
            updateItem({
                id,
                title,
                description,
                icon: icon || '🤫',
                checked: !checked,
            })
        }
        setLastTap(currentTime)
    }

    return (
        <div
            className={cn(
                'flex w-full max-w-xl flex-col gap-6 relative',
                checked ? ' brightness-50' : ''
            )}
            onClick={handleDoubleTap}
        >
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
                <ItemActions className="gap-5">
                    {checked && (
                        <Badge variant="secondary" className="rounded-md py-1">
                            <CheckIcon size={16} />
                        </Badge>
                    )}
                    <Popover open={isOpen} onOpenChange={setIsOpen}>
                        <PopoverTrigger asChild>
                            <button className="py-1 pl-1">
                                <EditIcon size={'20px'}></EditIcon>
                            </button>
                        </PopoverTrigger>
                        <Portal>
                            <PopoverContent
                                side="left"
                                align="start"
                                onOpenAutoFocus={(e) => e.preventDefault()}
                            >
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
