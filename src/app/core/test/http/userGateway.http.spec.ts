import { UserGatewayHttp } from "../../adapters/http/userGateway.http"
import { UserModel } from "../../models/user.model"
import { URL_ADD_NEW, URL_BASE, URL_DELETE, URL_EDIT, URL_GET_ALL, URL_GET_ONE, URL_USER } from "../../base/urls/base.url"
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from "@angular/core/testing"
import { BaseDTO } from "../../adapters/http/DTO/base.DTO";
import { UserDTO } from "../../adapters/http/DTO/user.DTO";

describe('user gateway on http', () => {
    let newUsers: UserModel[]
    let userHttp: UserGatewayHttp
    let httpTestingController: HttpTestingController;
    let response: BaseDTO

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
        httpTestingController = TestBed.inject(HttpTestingController);
        userHttp = TestBed.inject(UserGatewayHttp);
        newUsers = [
            { id: 1, name: 'user 1', email: 'userEmail', rulesRef: [1, 2]},
            { id: 2, name: 'user 2', email: 'userEmail', rulesRef: [1, 2]}
        ]
        response = {
            status: {
                success: true,
                code: 200,
                message: 'successfull'
            },
            token: 'my token',
            data: {}
        }
    })

    afterEach(() => {
        httpTestingController.verify()
    });

    it('should retrieve all users', (done) => {
        const fakeData: UserDTO[] = [
            { id: 1, name: 'user 1', email: 'userEmail', rulesRef: [1, 2], created: new Date(2023, 11, 14), updated: null},
            { id: 2, name: 'user 2', email: 'userEmail', rulesRef: [1, 2], created: new Date(2023, 11, 14), updated: null}
        ]
        response.data = { users: fakeData }

        userHttp.retrieveAll().subscribe(users => {
            expect(users).toEqual(newUsers)
            done()
        })

        const req = httpTestingController.expectOne(URL_BASE + URL_USER + URL_GET_ALL);
        expect(req.request.method).toBe('GET');
        req.flush(response);
    })

    it('should retrieve one user by id', (done) => {
        const fakeData: UserDTO = { id: 2, name: 'user 2', email: 'userEmail', rulesRef: [1, 2], created: new Date(2023, 11, 14), updated: null}
        response.data = { user: fakeData }

        userHttp.retrieveOneById(2).subscribe(user => {
            expect(user).toEqual(newUsers[1])
            done()
        })

        const req = httpTestingController.expectOne(URL_BASE + URL_USER + URL_GET_ONE + `/${2}`);
        expect(req.request.method).toBe('GET');
        req.flush(response);
    })

    it('should add new user', (done) => {
        const fakeData: UserDTO[] = [
            { id: 1, name: 'user 1', email: 'userEmail', rulesRef: [1, 2], created: new Date(2023, 11, 14), updated: null},
            { id: 2, name: 'user 2', email: 'userEmail', rulesRef: [1, 2], created: new Date(2023, 11, 14), updated: null}
        ]
        response.data = { users: fakeData }
        const newUser: UserModel = { id: 2, name: 'user 2', email: 'userEmail', rulesRef: [1, 2]}

        userHttp.addNew(newUser).subscribe(users => {
            expect(users).toContainEqual(newUser)
            done()
        })

        const req = httpTestingController.expectOne(URL_BASE + URL_USER + URL_ADD_NEW);
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual(newUser)
        req.flush(response);
    })

    it('should edit the user specified', (done) => {
        const fakeData: UserDTO[] = [
            { id: 1, name: 'user 1', email: 'userEmail', rulesRef: [1, 2], created: new Date(2023, 11, 14), updated: null},
            { id: 2, name: 'user 2', email: 'userEmail', rulesRef: [1, 2], created: new Date(2023, 11, 14), updated: null}
        ]
        response.data = { users: fakeData }
        const userEdited: UserModel = { id: 2, name: 'user 2', email: 'userEmail', rulesRef: [1, 2]}

        userHttp.edit(userEdited).subscribe(users => {
            expect(users).toContainEqual(userEdited)
            done()
        })

        const req = httpTestingController.expectOne(URL_BASE + URL_USER + URL_EDIT);
        expect(req.request.method).toBe('PUT');
        expect(req.request.body).toEqual(userEdited)
        req.flush(response);

    })

    it('should delete the user specified by id', (done) => {
        const fakeData: UserDTO[] = [
            { id: 1, name: 'user 1', email: 'userEmail', rulesRef: [1, 2], created: new Date(2023, 11, 14), updated: null},
            { id: 2, name: 'user 2', email: 'userEmail', rulesRef: [1, 2], created: new Date(2023, 11, 14), updated: null}
        ]
        response.data = { users: fakeData}
        const userToDeleted: UserModel = { id: 2, name: 'user 2', email: 'userEmail', rulesRef: [1, 2]}

        userHttp.delete(userToDeleted).subscribe(users => {
            expect(users).not.toContain(userToDeleted)
            done()
        })
        const req = httpTestingController.expectOne(URL_BASE + URL_USER + URL_DELETE + `/${userToDeleted.id}`);
        expect(req.request.method).toBe('DELETE');
        req.flush(response);
    })

})