import { URL_ADD_NEW, URL_BASE, URL_DELETE, URL_EDIT, URL_EVENT, URL_GET_ALL, URL_GET_ONE } from "../../base/urls/base.url"
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from "@angular/core/testing"
import { EventModel } from "../../models/event.model";
import { EventDTO } from "../../adapters/http/DTO/event.DTD";
import { EventGatewayHttp } from "../../adapters/http/eventGateway.http";
import { BaseDTO } from "../../adapters/http/DTO/base.DTO";

describe('Event gateway on http', () => {
    let newEvents: EventModel[]
    let eventHttp: EventGatewayHttp
    let httpTestingController: HttpTestingController;
    let response: BaseDTO

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
        httpTestingController = TestBed.inject(HttpTestingController);
        eventHttp = TestBed.inject(EventGatewayHttp);
        newEvents = [
            { id: 1, date: new Date(2023, 11, 18), typeRef: 1},
            { id: 2, date: new Date(2023, 11, 19), typeRef: 1}
        ]
        response = {
            status: {
                success: true,
                code: 200,
                message: 'successfull'
            },
            token: 'my token',
            data: {}
        }
    })

    afterEach(() => {
        httpTestingController.verify()
    });

    it('should retrieve all events', (done) => {
        const fakeData: EventDTO[] = [
            { id: 1, date: new Date(2023, 11, 18), typeRef: 1, created: new Date(2023, 11, 14), updated: null},
            { id: 2, date: new Date(2023, 11, 19), typeRef: 1, created: new Date(2023, 11, 14), updated: null}
        ]
        response.data = { events : fakeData }

        eventHttp.retrieveAll().subscribe(events => {
            expect(events).toEqual(newEvents)
            console.log(events)
            done()
        })

        const req = httpTestingController.expectOne(URL_BASE + URL_EVENT + URL_GET_ALL);
        expect(req.request.method).toBe('GET');
        req.flush(response);
    })

    it('should retrieve one event by id', (done) => {
        const fakeData: EventDTO = { id: 2, date: new Date(2023, 11, 19), typeRef: 1, created: new Date(2023, 11, 14), updated: null}
        response.data = { event: fakeData }

        eventHttp.retrieveOneById(2).subscribe(event => {
            expect(event).toEqual(newEvents[1])
            done()
        })

        const req = httpTestingController.expectOne(URL_BASE + URL_EVENT + URL_GET_ONE + `/${2}`);
        expect(req.request.method).toBe('GET');
        req.flush(response);
    })

    it('should add new event', (done) => {
        const newEvent: EventModel = { id: 3, date: new Date(2023, 11, 20), typeRef: 1}
        response.status.success = true

        eventHttp.addNew(newEvent).subscribe(response => {
            expect(response).toBe(true)
            done()
        })

        const req = httpTestingController.expectOne(URL_BASE + URL_EVENT + URL_ADD_NEW);
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual(newEvent)
        req.flush(response);
    })

    it('should edit the event specified', (done) => {
        const eventEdited: EventModel = { id: 2, date: new Date(2023, 11, 20), typeRef: 1}
        response.status.success = true

        eventHttp.edit(eventEdited).subscribe(response => {
            expect(response).toBe(true)
            done()
        })

        const req = httpTestingController.expectOne(URL_BASE + URL_EVENT + URL_EDIT);
        expect(req.request.method).toBe('PUT');
        expect(req.request.body).toEqual(eventEdited)
        req.flush(response);

    })

    it('should delete the event specified by id', (done) => {
        const eventToDeleted: EventModel = { id: 2, date: new Date(2023, 11, 19), typeRef: 1}
        response.status.success = true

        eventHttp.delete(eventToDeleted).subscribe(response => {
            expect(response).toBe(true)
            done()
        })
        const req = httpTestingController.expectOne(URL_BASE + URL_EVENT + URL_DELETE + `/${eventToDeleted.id}`);
        expect(req.request.method).toBe('DELETE');
        req.flush(response);
    })

})