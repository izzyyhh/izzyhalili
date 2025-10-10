'use client'

import React, { useState } from 'react'
import { useOurListStore } from '@/lib/stores/OurListStore'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

type ListItemFormProps = {
    setIsOpen: (x: any) => void
}

const ListItemForm: React.FC<ListItemFormProps> = ({
    setIsOpen,
}: ListItemFormProps) => {
    const { addItem } = useOurListStore()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [icon, setIcon] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!title.trim()) {
            alert('Title is required')
            return
        }

        await addItem({
            title,
            description: description || undefined,
            icon: icon || '📌', // Default icon if none is provided
        })

        // Reset form fields after submission
        setTitle('')
        setDescription('')
        setIcon('')
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
                Add Item
            </Button>
        </form>
    )
}

export default ListItemForm
