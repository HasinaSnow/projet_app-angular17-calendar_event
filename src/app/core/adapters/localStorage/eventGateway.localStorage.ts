import { Observable, of } from "rxjs";
import { EventGateway } from "../../ports/event.gateways";
import { EventModel } from "../../models/event.model";

export class EventGatewayLocalStorage extends EventGateway {

    withEvents(events: EventModel[]): EventGatewayLocalStorage {
        this.updateEvents([...events])
        return this
    }

    retrieveAll(): Observable<EventModel[]> {
        return of(this.getEvents())
    }

    retrieveOneById(id: number): Observable<EventModel | null> {
        const oneById = this.getOne(id)
        return of(oneById != undefined ? oneById : null)
    }

    addNew(newEvent: EventModel): Observable<boolean> {
       const events = this.getEvents()
       const lastId = this.getLastId()
       newEvent.id = lastId + 1
       this.updateEvents([...events, newEvent])
       return of(true)
    }

    edit(eventEdited: EventModel): Observable<boolean> {
        const events = this.getEvents()
        if(events.find(event => event.id == eventEdited.id) === undefined)
            return of(false)
        const newEvents: EventModel[] = events.map(e => e.id == eventEdited.id ? eventEdited : e )
        this.updateEvents(newEvents)
        return of(true)
    }

    delete(eventToDeleted: EventModel): Observable<boolean> {
        const events = this.getEvents()
        if(events.find(event => event.id == eventToDeleted.id) === undefined)
            return of(false)
        const newEvents = this.getEvents().filter(event => event !== eventToDeleted)
        this.updateEvents(newEvents)
        return of(true)
    }

    private getEvents(): EventModel[] {
        const events = localStorage.getItem('events')
        const eventsparsed: EventModel[] = events ? JSON.parse(events) : [] as EventModel[]
        return eventsparsed.map(event => {
            event.date = new Date(event.date)
            return event
        })
    }

    private getOne(id: number): EventModel|undefined {
        const events = this.getEvents()
        const oneByid = events.find(event => event.id == id)
        return oneByid
    }

    private getLastId(): number{
        const eventsUsed = this.getEvents()
        const lastEvent = eventsUsed.pop()
        return lastEvent != undefined ? lastEvent.id : 1
    }

    private updateEvents(events: EventModel[]): EventModel[] {
        localStorage.setItem('events', JSON.stringify(events))
        return this.getEvents()
    }
}