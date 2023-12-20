export interface UserModel {
    id: number,
    name: string,
    email: string,
    rulesRef: number[],
}

export interface UserLoginModel {
    email: string,
    password: string
}

export interface UserLogupModel {
    name: string,
    email: string
    password: string
}