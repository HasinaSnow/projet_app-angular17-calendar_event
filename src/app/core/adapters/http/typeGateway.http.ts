import { Observable, map } from "rxjs";
import { TypeModel } from "../../models/type.model";
import { TypeGateway } from "../../ports/type.gateways";
import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { TypeDTO } from "./DTO/type.DTO";
import { URL_ADD_NEW, URL_BASE, URL_DELETE, URL_EDIT, URL_GET_ALL, URL_GET_ONE, URL_TYPE } from "../../base/urls/base.url";
import { TypeBuilder } from "../../models/builder/type.builder";
import { Injectable } from '@angular/core';
import { BaseDTO } from "./DTO/base.DTO";

@Injectable({
  providedIn: 'root',
})
export class TypeGatewayHttp extends TypeGateway {
    private httpClient: HttpClient = inject(HttpClient)

    retrieveAll(): Observable<TypeModel[]> {
        return this.httpClient.get<BaseDTO>(URL_BASE + URL_TYPE + URL_GET_ALL).pipe(
            map<BaseDTO,TypeModel[]>(response => response.data.types.map((type: TypeDTO) => {
                return new TypeBuilder()
                    .withId(type.id)
                    .withName(type.name)
                    .withInfos(type.description)
                    .build()
            }))
        )
    }

    retrieveOneById(id: number): Observable<TypeModel | null> {
        return this.httpClient.get<BaseDTO>(URL_BASE + URL_TYPE + URL_GET_ONE + `/${id}`).pipe(
            map<BaseDTO, TypeModel>(response => {
                return new TypeBuilder()
                    .withId(response.data.type.id)
                    .withName(response.data.type.name)
                    .withInfos(response.data.type.description)
                    .build()
            })
        )
    }

    addNew(newType: TypeModel): Observable<TypeModel[]> {
        return this.httpClient.post<BaseDTO>(URL_BASE + URL_TYPE + URL_ADD_NEW, newType).pipe(
            map<BaseDTO, TypeModel[]>(response => response.data.types.map((type: TypeDTO) => {
                return new TypeBuilder()
                    .withId(type.id)
                    .withName(type.name)
                    .withInfos(type.description)
                    .build()
            }))
        )
    }

    edit(typeEdited: TypeModel): Observable<TypeModel[] | null> {
        return this.httpClient.put<BaseDTO>(URL_BASE + URL_TYPE + URL_EDIT, typeEdited).pipe(
            map<BaseDTO, TypeModel[]>(response => response.data.types.map((type: TypeDTO) => {
                return new TypeBuilder()
                    .withId(type.id)
                    .withName(type.name)
                    .withInfos(type.description)
                    .build()
            }))
        )
    }

    delete(typeToDeleted: TypeModel): Observable<TypeModel[]|null> {
        return this.httpClient.delete<BaseDTO>(URL_BASE + URL_TYPE + URL_DELETE + `/${typeToDeleted.id}`).pipe(
            map<BaseDTO, TypeModel[]>(response => response.data.types.map((type: TypeDTO) => {
                return new TypeBuilder()
                    .withId(type.id)
                    .withName(type.name)
                    .withInfos(type.description)
                    .build()
            }))
        )
    }

}