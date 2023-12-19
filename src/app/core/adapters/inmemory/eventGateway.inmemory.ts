import { Observable, of } from "rxjs";
import { EventModel } from "../../models/event.model";
import { EventGateway } from "../../ports/event.gateways";
import { error } from "console";

export class EventGatewayInMemory extends EventGateway {

    private events: EventModel[] = []

    withEvents(events: EventModel[]): EventGatewayInMemory {
        this.events = events
        return this
    }

    retrieveAll(): Observable<EventModel[]> {
        return of(this.events)
    }

    retrieveOneById(id: number): Observable<EventModel|null> {
        const eventRetrieved = this.events.find(event => event.id == id)
        return of(eventRetrieved || null)
    }

    addNew(newEvent: EventModel): Observable<boolean> {
        newEvent.id = this.getlastId() + 1
        this.events = [...this.events, newEvent]
        return of(true)
    }

    edit(eventEdited: EventModel): Observable<boolean> {
        if(this.events.find(event => event.id === eventEdited.id) == undefined)
            return of(false)
        this.events = this.events.map(event => event.id == eventEdited.id ? eventEdited : event)
        return of(true)
    }

    delete(eventToDeleted: EventModel): Observable<boolean> {
        if(this.events.find(event => event.id === eventToDeleted.id) == undefined)
            return of(false)
        this.events = this.events.filter(event => event.id != eventToDeleted.id)
        return of(true)
    }

    private getlastId(): number {
        const lasteventAdded = this.events.reduce((value, next) => value > next ? value : next)
        return lasteventAdded.id
    }

}