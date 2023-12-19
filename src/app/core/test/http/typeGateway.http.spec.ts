import { TypeGatewayHttp } from "../../adapters/http/typeGateway.http"
import { TypeModel } from "../../models/type.model"
import { URL_ADD_NEW, URL_BASE, URL_DELETE, URL_EDIT, URL_GET_ALL, URL_GET_ONE, URL_TYPE } from "../../base/urls/base.url"
import { TypeDTO } from "../../adapters/http/DTO/type.DTO"
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from "@angular/core/testing"
import { BaseDTO } from "../../adapters/http/DTO/base.DTO";

describe('Type gateway on http', () => {
    let newTypes: TypeModel[]
    let typeHttp: TypeGatewayHttp
    let httpTestingController: HttpTestingController;
    let response: BaseDTO

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
        httpTestingController = TestBed.inject(HttpTestingController);
        typeHttp = TestBed.inject(TypeGatewayHttp);
        newTypes = [
            { id: 1, name: 'Wedding', infos: ''},
            { id: 2, name: 'Reunion', infos: ''}
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

    it('should retrieve all types', (done) => {
        const fakeData: TypeDTO[] = [
            { id: 1, name: 'Wedding', description: '', created: new Date(2023, 11, 14), updated: null},
            { id: 2, name: 'Reunion', description: '', created: new Date(2023, 11, 14), updated: null}
        ]
        response.data = { types: fakeData }

        typeHttp.retrieveAll().subscribe(types => {
            expect(types).toEqual(newTypes)
            done()
        })

        const req = httpTestingController.expectOne(URL_BASE + URL_TYPE + URL_GET_ALL);
        expect(req.request.method).toBe('GET');
        req.flush(response);
    })

    it('should retrieve one type by id', (done) => {
        const fakeData: TypeDTO = { id: 1, name: 'Wedding', description: '', created: new Date(2023, 11, 14), updated: null}
        response.data = { type: fakeData }

        typeHttp.retrieveOneById(1).subscribe(type => {
            expect(type).toEqual(newTypes[0])
            done()
        })

        const req = httpTestingController.expectOne(URL_BASE + URL_TYPE + URL_GET_ONE + `/${1}`);
        expect(req.request.method).toBe('GET');
        req.flush(response);
    })

    it('should add new type', (done) => {
        const fakeData: TypeDTO[] = [
            { id: 1, name: 'Wedding', description: '', created: new Date(2023, 11, 14), updated: null},
            { id: 2, name: 'Reunion', description: '', created: new Date(2023, 11, 14), updated: null}
        ]
        response.data = { types: fakeData }
        const newtype: TypeModel = { id: 2, name: 'Reunion', infos: '' }

        typeHttp.addNew(newtype).subscribe(types => {
            expect(types).toContainEqual(newtype)
            done()
        })

        const req = httpTestingController.expectOne(URL_BASE + URL_TYPE + URL_ADD_NEW);
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual(newtype)
        req.flush(response);
    })

    it('should edit the type specified', (done) => {
        const fakeData: TypeDTO[] = [
            { id: 1, name: 'Wedding', description: '', created: new Date(2023, 11, 14), updated: null},
            { id: 2, name: 'Sortie', description: '', created: new Date(2023, 11, 14), updated: null}
        ]
        response.data = { types: fakeData }
        const typeEdited: TypeModel = { id: 2, name: 'Sortie', infos: '' }

        typeHttp.edit(typeEdited).subscribe(types => {
            expect(types).toContainEqual(typeEdited)
            done()
        })

        const req = httpTestingController.expectOne(URL_BASE + URL_TYPE + URL_EDIT);
        expect(req.request.method).toBe('PUT');
        expect(req.request.body).toEqual(typeEdited)
        req.flush(response);

    })

    it('should delete the type specified by id', (done) => {
        const fakeData: TypeDTO[] = [
            { id: 1, name: 'Wedding', description: '', created: new Date(2023, 11, 14), updated: null},
            { id: 2, name: 'Reunion', description: '', created: new Date(2023, 11, 14), updated: null}
        ]
        response.data = { types: fakeData}
        const typeToDeleted: TypeModel = { id: 2, name: 'Reunion', infos: '' }

        typeHttp.delete(typeToDeleted).subscribe(types => {
            expect(types).not.toContain(typeToDeleted)
            done()
        })
        const req = httpTestingController.expectOne(URL_BASE + URL_TYPE + URL_DELETE + `/${typeToDeleted.id}`);
        expect(req.request.method).toBe('DELETE');
        req.flush(response);
    })

})