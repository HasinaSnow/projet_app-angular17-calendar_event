import { Observable, map } from "rxjs";
import { EventModel } from "../../models/event.model";
import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { URL_ADD_NEW, URL_BASE, URL_DELETE, URL_EDIT, URL_GET_ALL, URL_GET_ONE, URL_EVENT } from "../../base/urls/base.url";
import { Injectable } from '@angular/core';
import { EventGateway } from "../../ports/event.gateways";
import { EventDTO } from "./DTO/event.DTD";
import { EventBuilder } from "../../models/builder/event.builder";
import { BaseDTO } from "./DTO/base.DTO";

@Injectable({
  providedIn: 'root',
})
export class EventGatewayHttp extends EventGateway {
    private httpClient: HttpClient = inject(HttpClient)

    retrieveAll(): Observable<EventModel[]> {
        return this.httpClient.get<BaseDTO>(URL_BASE + URL_EVENT + URL_GET_ALL).pipe(
            map<BaseDTO,EventModel[]>(response => response.data.events.map((event: EventDTO) => {
                return new EventBuilder()
                    .withId(event.id)
                    .withDate(event.date)
                    .withTypeRef(event.typeRef)
                    .build()
            }))
        )
    }

    retrieveOneById(id: number): Observable<EventModel|null> {
        return this.httpClient.get<BaseDTO>(URL_BASE + URL_EVENT + URL_GET_ONE + `/${id}`).pipe(
            map<BaseDTO, EventModel>(response => {
                return new EventBuilder()
                    .withId(response.data.event.id)
                    .withDate(new Date(response.data.event.date))
                    .withTypeRef(response.data.event.typeRef)
                    .build()
            })
        )
    }

    addNew(newEvent: EventModel): Observable<boolean> {
        return this.httpClient.post<BaseDTO>(URL_BASE + URL_EVENT + URL_ADD_NEW, newEvent).pipe(
            map<BaseDTO, boolean>(data => data.status.success ? true : false)
        )
    }

    edit(eventEdited: EventModel): Observable<boolean> {
        return this.httpClient.put<BaseDTO>(URL_BASE + URL_EVENT + URL_EDIT, eventEdited).pipe(
            map<BaseDTO, boolean>(data => data.status.success ? true : false)
        )
    }

    delete(eventToDeleted: EventModel): Observable<boolean> {
        return this.httpClient.delete<BaseDTO>(URL_BASE + URL_EVENT + URL_DELETE + `/${eventToDeleted.id}`).pipe(
            map<BaseDTO, boolean>(data => data.status.success ? true : false)
        )
    }

}