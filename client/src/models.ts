export interface INote {
    id: number,
    text: string,
    createdAt: string,
    updatedAt: string,
    userId: number | null
}

export interface INotes {
    count: number,
    rows: INote[]
}