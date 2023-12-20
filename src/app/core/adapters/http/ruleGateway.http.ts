import { Observable, map } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { URL_ADD_NEW, URL_BASE, URL_DELETE, URL_EDIT, URL_GET_ALL, URL_GET_ONE, URL_RULE } from "../../base/urls/base.url";
import { Injectable } from '@angular/core';
import { BaseDTO } from "./DTO/base.DTO";
import { RuleGateway } from "../../ports/rule.gateways";
import { RuleModel } from "../../models/rule.model";
import { RuleBuilder } from "../../models/builder/rule.builder";
import { RuleDTO } from "./DTO/rule.DTO";

@Injectable({
  providedIn: 'root',
})
export class RuleGatewayHttp extends RuleGateway {
    private httpClient: HttpClient = inject(HttpClient)

    retrieveAll(): Observable<RuleModel[]> {
        return this.httpClient.get<BaseDTO>(URL_BASE + URL_RULE + URL_GET_ALL).pipe(
            map<BaseDTO,RuleModel[]>(response => response.data.Rules.map((Rule: RuleDTO) => {
                return new RuleBuilder()
                    .withId(Rule.id)
                    .withName(Rule.name)
                    .withInfos(Rule.description)
                    .build()
            }))
        )
    }

    retrieveOneById(id: number): Observable<RuleModel | null> {
        return this.httpClient.get<BaseDTO>(URL_BASE + URL_RULE + URL_GET_ONE + `/${id}`).pipe(
            map<BaseDTO, RuleModel>(response => {
                return new RuleBuilder()
                    .withId(response.data.rule.id)
                    .withName(response.data.rule.name)
                    .withInfos(response.data.rule.description)
                    .build()
            })
        )
    }

    addNew(newRule: RuleModel): Observable<RuleModel[]> {
        return this.httpClient.post<BaseDTO>(URL_BASE + URL_RULE + URL_ADD_NEW, newRule).pipe(
            map<BaseDTO, RuleModel[]>(response => response.data.Rules.map((rule: RuleDTO) => {
                return new RuleBuilder()
                    .withId(rule.id)
                    .withName(rule.name)
                    .withInfos(rule.description)
                    .build()
            }))
        )
    }

    edit(RuleEdited: RuleModel): Observable<RuleModel[] | null> {
        return this.httpClient.put<BaseDTO>(URL_BASE + URL_RULE + URL_EDIT, RuleEdited).pipe(
            map<BaseDTO, RuleModel[]>(response => response.data.Rules.map((rule: RuleDTO) => {
                return new RuleBuilder()
                    .withId(rule.id)
                    .withName(rule.name)
                    .withInfos(rule.description)
                    .build()
            }))
        )
    }

    delete(RuleToDeleted: RuleModel): Observable<RuleModel[]|null> {
        return this.httpClient.delete<BaseDTO>(URL_BASE + URL_RULE + URL_DELETE + `/${RuleToDeleted.id}`).pipe(
            map<BaseDTO, RuleModel[]>(response => response.data.Rules.map((rule: RuleDTO) => {
                return new RuleBuilder()
                    .withId(rule.id)
                    .withName(rule.name)
                    .withInfos(rule.description)
                    .build()
            }))
        )
    }

}