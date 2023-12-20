import { UserModel } from "./user.model"

export interface AuthModel {
    user: UserModel|null,
    isLogged: boolean,
    token: string|null
}