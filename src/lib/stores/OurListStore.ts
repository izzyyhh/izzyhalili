import { create } from 'zustand'
import { OurListFEApiRepository } from '../repository/OurListFEApiRepositry'

type ListItem = {
    id: number
    title: string
    description?: string
    icon?: string
}

type OurListStore = {
    list: ListItem[]
    loadList: () => Promise<void>
    addItem: (item: Omit<ListItem, 'id'>) => Promise<void>
    removeItem: (id: number) => Promise<void>
}

export const useOurListStore = create<OurListStore>((set) => {
    const repository = new OurListFEApiRepository<ListItem>('/api/ourlist')

    return {
        list: [],
        loadList: async () => {
            const loadedList = await repository.load()
            set({ list: loadedList })
        },
        addItem: async (item) => {
            const updatedList = await repository.add(item)
            set({ list: updatedList })
        },
        removeItem: async (id) => {
            const updatedList = await repository.remove(
                (item) => item.id === id
            )
            set({ list: updatedList })
        },
    }
})
