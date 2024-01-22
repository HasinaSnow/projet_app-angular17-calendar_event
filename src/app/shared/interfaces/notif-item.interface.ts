export interface INotifItem {
    context: string,
    infos?: string,
    model: {id: number, name: string, icon: string}
    user: {id: number, name: string, imageRef?: string},
    createdAt: Date
}

interface ITypeNotif {
    name: string,
    action: string
}