import { EventGatewayInMemory } from "../../adapters/inmemory/eventGateway.inmemory"
import { EventModel } from "../../models/event.model"

describe('Event gateway in memory', () => {
    let newEvents: EventModel[]
    let inMemoryEvents: EventGatewayInMemory

    beforeEach(() => {
        newEvents = [
            { id: 1, date: new Date(2023, 11, 18), typeRef: 1},
            { id: 2, date: new Date(2023, 11, 19), typeRef: 2}
        ]
        inMemoryEvents = new EventGatewayInMemory().withEvents(newEvents)
    })

    it('should retrieve all events', (done) => {
        inMemoryEvents.retrieveAll().subscribe(events => {
            expect(events).toEqual(newEvents)
            done()
        })
    })

    it('should retrieve one event by id', (done) => {
        inMemoryEvents.retrieveOneById(1).subscribe(event => {
            expect(event).toEqual(newEvents[0])
            done()
        })
    })

    it('should add new event', (done) => {
        const eventToAdded: EventModel = {id: 0, date: new Date(2023, 11, 20), typeRef: 1}
        inMemoryEvents.addNew(eventToAdded).subscribe(response => {
            expect(response).toBe(true)
            done()
        })
    })

    it('should edit the event specified', (done) => {
        const eventEdited: EventModel = { id: 2, date: new Date(2023, 11, 21), typeRef: 1 }
        inMemoryEvents.edit(eventEdited).subscribe(response => {
            expect(response).toBe(true)
            done()
        })
    })

    it('should delete the event specified by id', (done) => {
        const eventToDeleted = newEvents[0]
        inMemoryEvents.delete(eventToDeleted).subscribe(events => {
            expect(events).not.toContain(eventToDeleted)
            done()
        })
    })

})