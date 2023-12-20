import { AuthGateway } from "../../../ports/auth.gateways";
import { AuthModel } from "../../../models/auth.model";
import { UserLoginModel, UserLogupModel, UserModel } from "../../../models/user.model";
import { Observable, map } from "rxjs"; 
import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { URL_AUTH, URL_BASE, URL_LOGIN, URL_LOGOUT, URL_LOGUP } from "../../../base/urls/base.url";
import { BaseDTO } from "../DTO/base.DTO";
import { UserDTO } from "../DTO/user.DTO";
import { AuthDTO } from "../DTO/auth.DTO";
import { UserBuilder } from "../../../models/builder/user.builder";

@Injectable({
    providedIn: 'root',
})
export class Auth extends AuthGateway {

    private httpClient: HttpClient = inject(HttpClient)

    override login(userToLogin: UserLoginModel): Observable<AuthModel> {
        return this.httpClient.post<BaseDTO>(URL_BASE + URL_AUTH + URL_LOGIN, userToLogin).pipe(
            map<BaseDTO, AuthModel>((response: BaseDTO) => {
                const auth: AuthDTO = response.data.auth as AuthDTO
                return { user: this.createUser(auth.user), isLogged: auth.isLogged, token: auth.token } as AuthModel
            })
        )
    }

    override logout(userId: number): Observable<AuthModel> {
        return this.httpClient.get<BaseDTO>(URL_BASE + URL_AUTH + URL_LOGOUT + `${userId}`).pipe(
            map<BaseDTO, AuthModel>((response: BaseDTO) => {
                return { user: null, isLogged: false, token: null} as AuthModel
            })
        )
    }

    override logup(userToLogUp: UserLogupModel): Observable<AuthModel> {
        return this.httpClient.post<BaseDTO>(URL_BASE  + URL_AUTH + URL_LOGUP, userToLogUp).pipe(
            map<BaseDTO, AuthModel>((response: BaseDTO) => {
                const auth: AuthDTO = response.data.auth as AuthDTO
                return  { user: this.createUser(auth.user), isLogged: auth.isLogged, token: auth.token } as AuthModel
            })
        )
    }

    private createUser(user: UserDTO): UserModel | null {
        return new UserBuilder()
            .withId(user.id)
            .withEmail(user.email)
            .withName(user.name)
            .withRulesRef(user.rulesRef)
            .build()
    }

}