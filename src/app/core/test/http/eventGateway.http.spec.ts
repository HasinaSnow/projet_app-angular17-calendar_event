import { URL_ADD_NEW, URL_BASE, URL_DELETE, URL_EDIT, URL_EVENT, URL_GET_ALL, URL_GET_ONE } from "../../base/urls/base.url"
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from "@angular/core/testing"
import { EventModel } from "../../models/event.model";
import { EventDTO } from "../../adapters/http/DTO/event.DTD";
import { EventGatewayHttp } from "../../adapters/http/eventGateway.http";

describe('Event gateway on http', () => {
    let newEvents: EventModel[]
    let eventHttp: EventGatewayHttp
    let httpTestingController: HttpTestingController;

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
    })

    afterEach(() => {
        httpTestingController.verify()
    });

    it('should retrieve all events', (done) => {
        const fakeDTOResponse: EventDTO[] = [
            { id: 1, date: new Date(2023, 11, 18), typeRef: 1, created: new Date(2023, 11, 14), updated: null},
            { id: 2, date: new Date(2023, 11, 19), typeRef: 1, created: new Date(2023, 11, 14), updated: null}
        ]

        eventHttp.retrieveAll().subscribe(events => {
            expect(events).toEqual(newEvents)
        })

        const req = httpTestingController.expectOne(URL_BASE + URL_EVENT + URL_GET_ALL);
        expect(req.request.method).toBe('GET');
        req.flush(fakeDTOResponse);
        done()
    })

    it('should retrieve one event by id', (done) => {
        const fakeDTOResponse: EventDTO = { id: 2, date: new Date(2023, 11, 18), typeRef: 1, created: new Date(2023, 11, 14), updated: null}

        eventHttp.retrieveOneById(1).subscribe(event => {
            expect(event).toEqual(newEvents[0])
        })

        const req = httpTestingController.expectOne(URL_BASE + URL_EVENT + URL_GET_ONE + `/${1}`);
        expect(req.request.method).toBe('GET');
        req.flush(fakeDTOResponse);
        done()
    })

    it('should add new event', (done) => {
        const newEvent: EventModel = { id: 3, date: new Date(2023, 11, 20), typeRef: 1}

        eventHttp.addNew(newEvent).subscribe(response => {
            expect(response).toBe(true)
            done()
        })

        const req = httpTestingController.expectOne(URL_BASE + URL_EVENT + URL_ADD_NEW);
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual(newEvent)
        req.flush(true);
    })

    it('should edit the event specified', (done) => {
        const eventEdited: EventModel = { id: 2, date: new Date(2023, 11, 20), typeRef: 1}

        eventHttp.edit(eventEdited).subscribe(response => {
            expect(response).toBe(true)
            done()
        })

        const req = httpTestingController.expectOne(URL_BASE + URL_EVENT + URL_EDIT);
        expect(req.request.method).toBe('PUT');
        expect(req.request.body).toEqual(eventEdited)
        req.flush(true);

    })

    it('should delete the event specified by id', (done) => {
        const eventToDeleted: EventModel = { id: 2, date: new Date(2023, 11, 19), typeRef: 1}

        eventHttp.delete(eventToDeleted).subscribe(response => {
            expect(response).toBe(true)
            done()
        })
        const req = httpTestingController.expectOne(URL_BASE + URL_EVENT + URL_DELETE + `/${eventToDeleted.id}`);
        expect(req.request.method).toBe('DELETE');
        req.flush(true);
    })

})