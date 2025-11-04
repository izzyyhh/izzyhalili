'use client'

import React, { useState, useEffect } from 'react'
import { useOurListStore } from '@/lib/stores/OurListStore'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ListItem } from '@/app/api/ourlist/route'

type ListItemFormProps = {
    setIsOpen: (x: any) => void
    item?: ListItem | null
    setItem?: (item: ListItem | null) => void
}

const ListItemForm: React.FC<ListItemFormProps> = ({
    setIsOpen,
    item,
    setItem,
}: ListItemFormProps) => {
    const { addItem, updateItem } = useOurListStore()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [icon, setIcon] = useState('')

    useEffect(() => {
        if (item) {
            setTitle(item.title)
            setDescription(item.description || '')
            setIcon(item.icon || '')
        }
    }, [item])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!title.trim()) {
            alert('Title is required')
            return
        }

        if (item) {
            await updateItem({
                ...item,
                title,
                description: description || undefined,
                icon: icon || '📌',
            })
        } else {
            await addItem({
                title,
                description: description || undefined,
                icon: icon || '📌',
            })
        }

        setTitle('')
        setDescription('')
        setIcon('')
        if (setItem) setItem(null)
        setIsOpen(false)
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
                <label htmlFor="title">Title</label>
                <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter title"
                    required
                />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <Input
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter description (optional)"
                />
            </div>
            <div>
                <label htmlFor="icon">Icon</label>
                <Input
                    id="icon"
                    value={icon}
                    onChange={(e) => setIcon(e.target.value)}
                    placeholder="Enter icon (optional)"
                />
            </div>
            <Button type="submit" className="mt-4">
                {item ? 'Save' : 'Add Item'}
            </Button>
        </form>
    )
}

export default ListItemForm
