import { Observable } from "rxjs";
import { EventModel } from "../models/event.model";

export abstract class EventGateway {
    abstract retrieveAll(): Observable<EventModel[]>
    abstract retrieveOneById(id: number): Observable<EventModel|null>
    abstract addNew(newEvent: EventModel): Observable<boolean>
    abstract edit(eventEdited: EventModel): Observable<boolean>
    abstract delete(eventToDeleted: EventModel): Observable<boolean>
}