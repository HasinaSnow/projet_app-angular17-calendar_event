export interface IEvent {
    id: number,
    date: Date,
    clientEvent: IRef,
    placeEvent: IRef,
    categEvent: IRef,
    statusEvent: boolean
}

interface IRef {
    id: number,
    name: string
}
