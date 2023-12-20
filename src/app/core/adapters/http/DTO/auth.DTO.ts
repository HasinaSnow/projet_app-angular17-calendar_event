import { UserDTO } from "./user.DTO";

export interface AuthDTO {
    isLogged: boolean,
    user: UserDTO,
    token: string
}