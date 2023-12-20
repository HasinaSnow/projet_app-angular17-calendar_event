import { Observable, of } from "rxjs";
import { UserGateway } from "../../ports/user.gateways";
import { UserModel } from "../../models/user.model";

export class UserGatewayLocalStorage extends UserGateway {

    withUsers(users: UserModel[]): UserGatewayLocalStorage {
        this.updateUsers([ ...users])
        return this
    }

    retrieveAll(): Observable<UserModel[]> {
        return of(this.getUsers())
    }

    retrieveOneById(id: number): Observable<UserModel | null> {
        const oneById = this.getOne(id)
        return of(oneById != undefined ? oneById : null)
    }

    addNew(newUser: UserModel): Observable<UserModel[]> {
       const users = this.getUsers()
       const lastId = this.getLastId()
       newUser.id = lastId + 1
       return of(this.updateUsers([ ...users, newUser]))
    }

    edit(user: UserModel): Observable<UserModel[] | null> {
        const users = this.getUsers()
        if(users.find(user => user.id == user.id) === undefined)
            return of(null)
        const newusers: UserModel[] = users.map(e => e.id == user.id ? user : e )
        return of(this.updateUsers(newusers))
    }

    delete(userToDeleted: UserModel): Observable<UserModel[]|null> {
        const users = this.getUsers()
        if(users.find(user => user.id == userToDeleted.id) === undefined)
            return of(null)
        const newusers = this.getUsers().filter(user => user !== userToDeleted)
        return of(this.updateUsers(newusers))
    }

    private getUsers(): UserModel[] {
        const users = localStorage.getItem('users')
        return users ? JSON.parse(users) : [] as UserModel[]
    }

    private getOne(id: number): UserModel|undefined {
        const users = this.getUsers()
        const oneByid = users.find(user => user.id == id)
        return oneByid
    }

    private getLastId(): number{
        const usersUsed = this.getUsers()
        const lastuser = usersUsed.pop()
        return lastuser != undefined ? lastuser.id : 1
    }

    private updateUsers(users: UserModel[]): UserModel[] {
        localStorage.setItem('users', JSON.stringify(users))
        return this.getUsers()
    }
}