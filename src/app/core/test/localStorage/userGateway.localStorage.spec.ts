import { UserGatewayLocalStorage } from "../../adapters/localStorage/userGateway.localStorage"
import { UserModel } from "../../models/user.model"


describe('User gateway in localStorage', () => {
    let newUsers: UserModel[]
    let onLocalStorageUser: UserGatewayLocalStorage

    beforeEach(() => {
        newUsers = [
            { id: 1, name: 'user 1', email: 'userEmail', password: 'userPass', rulesRef: [1, 2]},
            { id: 2, name: 'user 2', email: 'userEmail', password: 'userPass', rulesRef: [1, 2]}
        ]
        onLocalStorageUser = new UserGatewayLocalStorage().withUsers(newUsers)
    })

    it('should retrieve all Users', (done) => {
        onLocalStorageUser.retrieveAll().subscribe(Users => {
            expect(Users).toEqual(newUsers)
            done()
        })
    })

    it('should retrieve one User by id', (done) => {
        onLocalStorageUser.retrieveOneById(1).subscribe(User => {
            expect(User).toEqual(newUsers[0])
            done()
        })
    })

    it('should add new User', (done) => {
        const UserToAdded: UserModel = { id: 2, name: 'user 3', email: 'userEmail', password: 'userPass', rulesRef: [1, 2]}
        onLocalStorageUser.addNew(UserToAdded).subscribe(Users => {
            expect(Users).toContainEqual(UserToAdded)
            done()
        })
    })

    it('should edit the User specified', (done) => {
        const UserEdited: UserModel = { id: 2, name: 'user 2', email: 'userEmailEdited', password: 'userPass', rulesRef: [1, 2]}
        onLocalStorageUser.edit(UserEdited).subscribe(Users => {
            if(Users != null)
                expect(Users).toContainEqual(UserEdited)
            done()
        })
    })

    it('should delete the User specified by id', (done) => {
        const UserToDeleted = newUsers[0]
        onLocalStorageUser.delete(UserToDeleted).subscribe(Users => {
            if(Users != null)
                expect(Users).not.toContain(UserToDeleted)
            done()
        })
    })

})