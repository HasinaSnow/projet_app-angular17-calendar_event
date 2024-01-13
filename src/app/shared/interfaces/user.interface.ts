export interface IUser {
    id: number,
    name: string,
    servicesUser: IServiceUser[],
    rulesUser: IRuleUser[],
    online: boolean
}
interface IServiceUser {
    id: number,
    name: string
}

interface IRuleUser {
    id: number,
    name: string
}