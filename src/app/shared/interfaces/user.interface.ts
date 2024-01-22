export interface IUser {
    id: number,
    name: string,
    servicesUser: IServiceUser[],
    rulesUser: IRuleUser[],
    online: boolean
}

export interface IUserDetail {
    userRef: IUser,
    adress: string,
    email: string,
    socials: ISocial
    infos: string
}

export interface IMyProfile {
    id: number,
    name: string,
    email: string,
    rules: IRuleUser[],
    isOnline: boolean
}

interface IServiceUser {
    id: number,
    name: string
}

interface IRuleUser {
    id: number,
    name: string
}

interface ISocial {
    facebook: string,
    whatsapp?: string,
    twitter?: string,
}