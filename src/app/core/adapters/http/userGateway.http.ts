import { Observable, map } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { URL_ADD_NEW, URL_BASE, URL_DELETE, URL_EDIT, URL_GET_ALL, URL_GET_ONE, URL_USER } from "../../base/urls/base.url";
import { Injectable } from '@angular/core';
import { BaseDTO } from "./DTO/base.DTO";
import { UserGateway } from "../../ports/user.gateways";
import { UserModel } from "../../models/user.model";
import { UserBuilder } from "../../models/builder/user.builder";
import { UserDTO } from "./DTO/user.DTO";

@Injectable({
  providedIn: 'root',
})
export class UserGatewayHttp extends UserGateway {
    private httpClient: HttpClient = inject(HttpClient)

    retrieveAll(): Observable<UserModel[]> {
        return this.httpClient.get<BaseDTO>(URL_BASE + URL_USER + URL_GET_ALL).pipe(
            map<BaseDTO,UserModel[]>(response => response.data.users.map((user: UserDTO) => {
                return new UserBuilder()
                    .withId(user.id)
                    .withName(user.name)
                    .withEmail(user.email)
                    .withRulesRef(user.rulesRef)
                    .build()
            }))
        )
    }

    retrieveOneById(id: number): Observable<UserModel | null> {
        return this.httpClient.get<BaseDTO>(URL_BASE + URL_USER + URL_GET_ONE + `/${id}`).pipe(
            map<BaseDTO, UserModel>(response => {
                return new UserBuilder()
                    .withId(response.data.user.id)
                    .withName(response.data.user.name)
                    .withEmail(response.data.user.email)
                    .withRulesRef(response.data.user.rulesRef)
                    .build()
            })
        )
    }

    addNew(newuser: UserModel): Observable<UserModel[]> {
        return this.httpClient.post<BaseDTO>(URL_BASE + URL_USER + URL_ADD_NEW, newuser).pipe(
            map<BaseDTO, UserModel[]>(response => response.data.users.map((user: UserDTO) => {
                return new UserBuilder()
                    .withId(user.id)
                    .withName(user.name)
                    .withEmail(user.email)
                    .withRulesRef(user.rulesRef)
                    .build()
            }))
        )
    }

    edit(userEdited: UserModel): Observable<UserModel[] | null> {
        return this.httpClient.put<BaseDTO>(URL_BASE + URL_USER + URL_EDIT, userEdited).pipe(
            map<BaseDTO, UserModel[]>(response => response.data.users.map((user: UserDTO) => {
                return new UserBuilder()
                    .withId(user.id)
                    .withName(user.name)
                    .withEmail(user.email)
                    .withRulesRef(user.rulesRef)
                    .build()
            }))
        )
    }

    delete(userToDeleted: UserModel): Observable<UserModel[]|null> {
        return this.httpClient.delete<BaseDTO>(URL_BASE + URL_USER + URL_DELETE + `/${userToDeleted.id}`).pipe(
            map<BaseDTO, UserModel[]>(response => response.data.users.map((user: UserDTO) => {
                return new UserBuilder()
                    .withId(user.id)
                    .withName(user.name)
                    .withEmail(user.email)
                    .withRulesRef(user.rulesRef)
                    .build()
            }))
        )
    }

}