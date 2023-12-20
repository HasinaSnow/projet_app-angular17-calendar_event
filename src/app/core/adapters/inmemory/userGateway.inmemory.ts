import { Observable, of } from "rxjs";
import { UserGateway } from "../../ports/user.gateways";
import { UserModel } from "../../models/user.model";

export class UserGatewayInMemory extends UserGateway {

    private users: UserModel[] = []

    withUsers(users: UserModel[]): UserGatewayInMemory {
        this.users = users
        return this
    }

    retrieveAll(): Observable<UserModel[]> {
        return of(this.users)
    }

    retrieveOneById(id: number): Observable<UserModel|null> {
        const userRetrieved = this.users.find(user => user.id == id)
        return of(userRetrieved || null)
    }

    addNew(newUser: UserModel): Observable<UserModel[]> {
        newUser.id = this.getlastId() + 1
        this.users = [...this.users, newUser]
        return of(this.users)
    }

    edit(userEdited: UserModel): Observable<UserModel[]|null> {
        if(this.users.find(user => user.id === userEdited.id) == undefined)
            return of(null)
        this.users = this.users.map(user => user.id == userEdited.id ? userEdited : user)
        return of(this.users)
    }

    delete(userToDeleted: UserModel): Observable<UserModel[]|null> {
        if(this.users.find(user => user.id === userToDeleted.id) == undefined)
            return of(null)
        this.users = this.users.filter(user => user.id != userToDeleted.id)
        return of(this.users)
    }

    private getlastId(): number {
        const lastuserAdded = this.users.reduce((value, next) => value > next ? value : next)
        return lastuserAdded.id
    }

}