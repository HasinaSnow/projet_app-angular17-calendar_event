import { Observable, map } from "rxjs";
import { TypeModel } from "../../models/type.model";
import { TypeGateway } from "../../ports/type.gateways";
import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { TypeDTO } from "./DTO/type.DTO";
import { URL_ADD_NEW, URL_BASE, URL_DELETE, URL_EDIT, URL_GET_ALL, URL_GET_ONE, URL_TYPE } from "../../base/urls/base.url";
import { TypeBuilder } from "../../models/builder/type.builder";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TypeGatewayHttp extends TypeGateway {
    private httpClient: HttpClient = inject(HttpClient)

    retrieveAll(): Observable<TypeModel[]> {
        return this.httpClient.get<TypeDTO[]>(URL_BASE + URL_TYPE + URL_GET_ALL).pipe(
            map<TypeDTO[],TypeModel[]>(types => types.map(type => {
                return new TypeBuilder()
                    .withId(type.id)
                    .withName(type.name)
                    .withInfos(type.description)
                    .build()
            }))
        )
    }

    retrieveOneById(id: number): Observable<TypeModel | null> {
        return this.httpClient.get<TypeDTO>(URL_BASE + URL_TYPE + URL_GET_ONE + `/${id}`).pipe(
            map<TypeDTO, TypeModel>(type => {
                return new TypeBuilder()
                    .withId(type.id)
                    .withName(type.name)
                    .withInfos(type.description)
                    .build()
            })
        )
    }

    addNew(newType: TypeModel): Observable<TypeModel[]> {
        return this.httpClient.post<TypeDTO[]>(URL_BASE + URL_TYPE + URL_ADD_NEW, newType).pipe(
            map<TypeDTO[], TypeModel[]>(types => types.map(type => {
                return new TypeBuilder()
                .withId(type.id)
                .withName(type.name)
                .withInfos(type.description)
                .build()
            }))
        )
    }

    edit(typeEdited: TypeModel): Observable<TypeModel[] | null> {
        return this.httpClient.put<TypeDTO[]>(URL_BASE + URL_TYPE + URL_EDIT, typeEdited).pipe(
            map<TypeDTO[], TypeModel[]>(types => types.map(type => {
                return new TypeBuilder()
                .withId(type.id)
                .withName(type.name)
                .withInfos(type.description)
                .build()
            }))
        )
    }

    delete(typeToDeleted: TypeModel): Observable<TypeModel[]|null> {
        return this.httpClient.delete<TypeDTO[]>(URL_BASE + URL_TYPE + URL_DELETE + `/${typeToDeleted.id}`).pipe(
            map<TypeDTO[], TypeModel[]>(types => types.map(type => {
                return new TypeBuilder()
                    .withId(type.id)
                    .withName(type.name)
                    .withInfos(type.description)
                    .build()
            }))
        )
    }

}