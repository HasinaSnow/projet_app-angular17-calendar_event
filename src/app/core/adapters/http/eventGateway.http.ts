import { Observable, map } from "rxjs";
import { EventModel } from "../../models/event.model";
import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { URL_ADD_NEW, URL_BASE, URL_DELETE, URL_EDIT, URL_GET_ALL, URL_GET_ONE, URL_EVENT } from "../../base/urls/base.url";
import { Injectable } from '@angular/core';
import { EventGateway } from "../../ports/event.gateways";
import { EventDTO } from "./DTO/event.DTD";
import { EventBuilder } from "../../models/builder/event.builder";

@Injectable({
  providedIn: 'root',
})
export class EventGatewayHttp extends EventGateway {
    private httpClient: HttpClient = inject(HttpClient)

    retrieveAll(): Observable<EventModel[]> {
        return this.httpClient.get<EventDTO[]>(URL_BASE + URL_EVENT + URL_GET_ALL).pipe(
            map<EventDTO[],EventModel[]>(events => events.map(event => {
                return new EventBuilder()
                    .withId(event.id)
                    .withDate(event.date)
                    .withTypeRef(event.typeRef)
                    .build()
            }))
        )
    }

    retrieveOneById(id: number): Observable<EventModel|null> {
        return this.httpClient.get<EventDTO>(URL_BASE + URL_EVENT + URL_GET_ONE + `/${id}`).pipe(
            map<EventDTO, EventModel>(event => {
                return new EventBuilder()
                    .withId(event.id)
                    .withDate(event.date)
                    .withTypeRef(event.typeRef)
                    .build()
            })
        )
    }

    addNew(newEvent: EventModel): Observable<boolean> {
        return this.httpClient.post<boolean>(URL_BASE + URL_EVENT + URL_ADD_NEW, newEvent)
    }

    edit(eventEdited: EventModel): Observable<boolean> {
        return this.httpClient.put<boolean>(URL_BASE + URL_EVENT + URL_EDIT, eventEdited)
    }

    delete(eventToDeleted: EventModel): Observable<boolean> {
        return this.httpClient.delete<boolean>(URL_BASE + URL_EVENT + URL_DELETE + `/${eventToDeleted.id}`)
    }

}