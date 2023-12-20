import { UserGatewayInMemory } from "../../adapters/inmemory/userGateway.inmemory"
import { UserModel } from "../../models/user.model"


describe('user gateway in memory', () => {
    let newUsers: UserModel[]
    let inMemoryUsers: UserGatewayInMemory

    beforeEach(() => {
        newUsers = [
            { id: 1, name: 'user 1', email: 'userEmail', rulesRef: [1, 2]},
            { id: 2, name: 'user 2', email: 'userEmail', rulesRef: [1, 2]}
        ]
        inMemoryUsers = new UserGatewayInMemory().withUsers(newUsers)
    })

    it('should retrieve all Users', (done) => {
        inMemoryUsers.retrieveAll().subscribe(Users => {
            expect(Users).toEqual(newUsers)
            done()
        })
    })

    it('should retrieve one user by id', (done) => {
        inMemoryUsers.retrieveOneById(2).subscribe(user => {
            expect(user).toEqual(newUsers[1])
            done()
        })
    })

    it('should add new user', (done) => {
        const userToAdded: UserModel = { id: 3, name: 'user 3', email: 'userEmail', rulesRef: [1, 2]}
        inMemoryUsers.addNew(userToAdded).subscribe(Users => {
            expect(Users).toContainEqual(userToAdded)
            done()
        })
    })

    it('should edit the user specified', (done) => {
        const userEdited: UserModel = { id: 2, name: 'user 1', email: 'userEmailEdited', rulesRef: [1, 2]}
        inMemoryUsers.edit(userEdited).subscribe(Users => {
            if(Users != null)
                expect(Users).toContainEqual(userEdited)
            done()
        })
    })

    it('should delete the user specified by id', (done) => {
        const userToDeleted = newUsers[0]
        inMemoryUsers.delete(userToDeleted).subscribe(Users => {
            if(Users != null)
                expect(Users).not.toContain(userToDeleted)
            done()
        })
    })

})