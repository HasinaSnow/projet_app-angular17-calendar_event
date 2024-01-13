export interface Itask {
    id: number,
    action: string,
    eventTask: IEventTask,
    clientEventTask: IClientEventTask,
    serviceEventTask: IServiceEventTask,
    userTask: IUserTask
}

interface IUserTask {
    id: number,
    name: string
}

interface IEventTask {
    id: number,
    date: Date
}

interface IClientEventTask {
    id: number,
    name: string
}

interface IServiceEventTask {
    id: number,
    name: string
}
