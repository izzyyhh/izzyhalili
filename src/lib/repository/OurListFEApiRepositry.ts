import { IOurListRepository } from './IOurListRepository'

export class OurListFEApiRepository<T extends { id: number }>
    implements IOurListRepository<T>
{
    private readonly baseUrl: string

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl
    }
    async save(list: T[]): Promise<T[]> {
        const response = await fetch(`${this.baseUrl}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(list),
        })
        if (!response.ok) {
            throw new Error('Failed to save the list')
        }
        return response.json()
    }

    async load(): Promise<T[]> {
        const response = await fetch(`${this.baseUrl}`)
        if (!response.ok) {
            throw new Error('Failed to load the list')
        }
        return response.json()
    }

    async add(item: Omit<T, 'id'>): Promise<T[]> {
        const response = await fetch(`${this.baseUrl}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item),
        })
        if (!response.ok) {
            throw new Error('Failed to add the item')
        }
        return response.json()
    }

    async update(item: T): Promise<T[]> {
        const response = await fetch(`${this.baseUrl}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item),
        })
        if (!response.ok) {
            throw new Error('Failed to add the item')
        }
        return response.json()
    }

    async remove(predicate: (item: T) => boolean): Promise<T[]> {
        // Extract the ID from the predicate
        const list = await this.load()
        const itemToRemove = list.find(predicate)
        if (!itemToRemove) {
            throw new Error('Item not found')
        }

        const response = await fetch(`${this.baseUrl}?id=${itemToRemove.id}`, {
            method: 'DELETE',
        })
        if (!response.ok) {
            throw new Error('Failed to remove the item')
        }
        return response.json()
    }
}
