import { EventGatewayLocalStorage } from "../../adapters/localStorage/eventGateway.localStorage"
import { EventModel } from "../../models/event.model"

describe('Event gateway in localStorage', () => {
    let newEvents: EventModel[]
    let onLocalStorageType: EventGatewayLocalStorage

    beforeEach(() => {
        newEvents = [
            { id: 1, date: new Date(2023, 11, 18), typeRef: 1},
            { id: 2, date: new Date(2023, 11, 19), typeRef: 1}
        ]
        onLocalStorageType = new EventGatewayLocalStorage().withEvents(newEvents)
    })

    it('should retrieve all events', (done) => {
        onLocalStorageType.retrieveAll().subscribe(events => {
            expect(events).toEqual(newEvents)
            done()
        })
    })

    it('should retrieve one event by id', (done) => {
        onLocalStorageType.retrieveOneById(1).subscribe(type => {
            expect(type).toEqual(newEvents[0])
            done()
        })
    })

    it('should add new event', (done) => {
        const typeToAdded: EventModel = { id: 0, date: new Date(2023, 11, 20), typeRef: 1 }
        onLocalStorageType.addNew(typeToAdded).subscribe(response => {
            expect(response).toBe(true)
            onLocalStorageType.retrieveAll().subscribe(events => {
                expect(events).toContainEqual(typeToAdded)
                done()
            })
        })
    })

    it('should edit the event specified', (done) => {
        const typeEdited: EventModel = { id: 2, date: new Date(2023, 11, 21), typeRef: 1 }
        onLocalStorageType.edit(typeEdited).subscribe(response => {
            expect(response).toBe(true)
            onLocalStorageType.retrieveAll().subscribe(events => {
                expect(events).toContainEqual(typeEdited)
                done()
            })
        })
    })

    it('should delete the event specified by id', (done) => {
        const typeToDeleted = newEvents[0]
        onLocalStorageType.delete(typeToDeleted).subscribe(response => {
            expect(response).toBe(true)
            onLocalStorageType.retrieveAll().subscribe(events => {
                expect(events).toContainEqual(typeToDeleted)
                done()
            })
        })
    })

})