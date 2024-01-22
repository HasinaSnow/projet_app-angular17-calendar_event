export interface ItaskItem {
    id: number,
    action: string,
    delais?: Date,
    serviceTask: { id: number, name: string },
    eventTask: IEventTask,
    userAttributed: {id: number, name: string},
    createdAt: Date,
    isNew?: boolean
}


interface IEventTask {
    id: number,
    date: Date,
    place: { id: number, name: string }
}

