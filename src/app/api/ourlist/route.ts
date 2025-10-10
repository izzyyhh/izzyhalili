import { OurListFileRepository } from '@/lib/repository/OurListFileRepository'
import { NextResponse } from 'next/server'

export type ListItem = {
    id: number
    title: string
    description?: string
    icon: string
}

const repo = new OurListFileRepository<ListItem>('ourlist.json')

export async function GET() {
    const list = await repo.load()
    return NextResponse.json(list)
}

export async function POST(req: Request) {
    try {
        const body = await req.json()
        if (!body?.title) {
            return NextResponse.json(
                { error: 'title required' },
                { status: 400 }
            )
        }

        const list = await repo.load()
        const newItem: ListItem = {
            id: (list.at(-1)?.id ?? 0) + 1,
            title: body.title,
            description: body.description,
            icon: body.icon || '🤫',
        }

        const updated = await repo.add(newItem)
        return NextResponse.json(updated, { status: 201 })
    } catch (error) {
        console.error('Error adding item:', error)
        return NextResponse.json(
            { error: 'Failed to add item' },
            { status: 500 }
        )
    }
}

export async function DELETE(req: Request) {
    try {
        const { searchParams } = new URL(req.url)
        const id = Number(searchParams.get('id'))

        if (!id) {
            return NextResponse.json({ error: 'id required' }, { status: 400 })
        }

        const updated = await repo.remove((item: ListItem) => item.id === id)
        return NextResponse.json(updated)
    } catch (error) {
        console.error('Error removing item:', error)
        return NextResponse.json(
            { error: 'Failed to remove item' },
            { status: 500 }
        )
    }
}
