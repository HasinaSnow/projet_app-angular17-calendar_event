import { Observable } from "rxjs";
import { UserModel } from "../models/user.model";

export abstract class UserGateway {
    abstract retrieveAll(): Observable<UserModel[]>
    abstract retrieveOneById(id: number): Observable<UserModel|null>
    abstract addNew(newUser: UserModel): Observable<UserModel[]>
    abstract edit(userEdited: UserModel): Observable<UserModel[]|null>
    abstract delete(userToDeleted: UserModel): Observable<UserModel[]|null>
}