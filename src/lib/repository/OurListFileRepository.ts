import { promises as fs } from 'fs'
import * as path from 'path'
import { IOurListRepository } from './IOurListRepository'

export class OurListFileRepository<T> implements IOurListRepository<T> {
    private filePath: string

    constructor(fileName: string) {
        const baseDir =
            process.env.DATA_DIR || path.resolve(__dirname, '../../data')
        this.filePath = path.resolve(baseDir, fileName)
    }

    async load(): Promise<T[]> {
        try {
            const data = await fs.readFile(this.filePath, 'utf-8')
            const parsedData = JSON.parse(data) as T[]
            if (!Array.isArray(parsedData)) {
                throw new Error('Data is not an array')
            }
            return parsedData
        } catch (error) {
            if ((error as { code?: string }).code === 'ENOENT') {
                await this.save([])
                return []
            }
            throw error
        }
    }

    async save(list: T[]): Promise<T[]> {
        await fs.mkdir(path.dirname(this.filePath), { recursive: true }) // Erstelle das Verzeichnis, falls es nicht existiert
        await fs.writeFile(
            this.filePath,
            JSON.stringify(list, null, 2),
            'utf-8'
        )
        return list
    }

    async add(item: T): Promise<T[]> {
        const list = await this.load()
        list.push(item)
        return this.save(list)
    }

    async remove(predicate: (item: T) => boolean): Promise<T[]> {
        const list = await this.load()
        const updatedList = list.filter((item) => !predicate(item))
        return this.save(updatedList)
    }
}
