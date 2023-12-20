import { URL_ADD_NEW, URL_AUTH, URL_BASE, URL_DELETE, URL_EDIT, URL_GET_ALL, URL_GET_ONE, URL_LOGIN, URL_LOGOUT, URL_LOGUP, URL_TYPE } from "../../../base/urls/base.url"
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from "@angular/core/testing"
import { AuthModel } from "../../../models/auth.model";
import { Auth } from "../../../adapters/http/auth/auth";
import { BaseDTO } from "../../../adapters/http/DTO/base.DTO";
import { UserModel } from "../../../models/user.model";
import { UserBuilder } from "../../../models/builder/user.builder";
import { AuthDTO } from "../../../adapters/http/DTO/auth.DTO";
import { UserDTO } from "../../../adapters/http/DTO/user.DTO";

describe('Auth gateway', () => {
    let newAuth: AuthModel
    let auth: Auth
    let httpTestingController: HttpTestingController;
    let response: BaseDTO

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
        httpTestingController = TestBed.inject(HttpTestingController);
        auth = TestBed.inject(Auth);
        newAuth = { user: createUser(), isLogged: false, token: null }
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

    it('should login', (done) => {
        const fakeData: AuthDTO = {
            isLogged: true,
            user: { id: 1, name: 'user 1', email: 'user@gmail.com', rulesRef: [1, 2], created: new Date(2023, 11, 14), updated: null},
            token: 'token'
        }
        response.data = { auth: fakeData }
        newAuth.isLogged = true
        newAuth.token = 'token'

        auth.login({email: newAuth.user?.email || '', password: 'pass'}).subscribe(auth => {
            expect(auth).toEqual(newAuth)
            done()
        })

        const req = httpTestingController.expectOne(URL_BASE + URL_AUTH + URL_LOGIN);
        expect(req.request.method).toBe('POST');
        req.flush(response);
    })

    it('should logout', (done) => {
        const fakeData = null
        response.data = { auth: fakeData }
        newAuth.isLogged = false
        newAuth.user = null
        newAuth.token = null

        auth.logout(1).subscribe(auth => {
            expect(auth).toEqual(newAuth)
            done()
        })

        const req = httpTestingController.expectOne(URL_BASE + URL_AUTH + URL_LOGOUT + `${1}`);
        expect(req.request.method).toBe('GET');
        req.flush(response);
    })

    it('Should logup', (done) => {
        const fakeData: AuthDTO = {
            isLogged: true,
            user: { id: 1, name: 'user 1', email: 'user@gmail.com', rulesRef: [1, 2], created: new Date(2023, 11, 14), updated: null},
            token: 'token'
        }
        response.data = { auth: fakeData }
        newAuth.isLogged = true
        newAuth.token = 'token'

        auth.logup({name: newAuth.user?.name || '', email: newAuth.user?.email || '', password: 'pass'}).subscribe(auth => {
            expect(auth).toEqual(newAuth)
            done()
        })

        const req = httpTestingController.expectOne(URL_BASE + URL_AUTH + URL_LOGUP);
        expect(req.request.method).toBe('POST');
        req.flush(response);
    })


    function createUser(): UserModel {
        return new UserBuilder()
            .withId(1)
            .withName('user 1')
            .withEmail('user@gmail.com')
            .withRulesRef([1, 2])
            .build()
    }

})