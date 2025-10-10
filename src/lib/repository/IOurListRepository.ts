export interface IOurListRepository<T> {
    load(): Promise<T[]>
    save(list: T[]): Promise<T[]>
    add(item: T): Promise<T[]>
    remove(predicate: (item: T) => boolean): Promise<T[]>
}
