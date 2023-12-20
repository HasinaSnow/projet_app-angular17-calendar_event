import { URL_ADD_NEW, URL_BASE, URL_DELETE, URL_EDIT, URL_GET_ALL, URL_GET_ONE, URL_RULE } from "../../base/urls/base.url"
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from "@angular/core/testing"
import { BaseDTO } from "../../adapters/http/DTO/base.DTO";
import { RuleModel } from "../../models/rule.model";
import { RuleGatewayHttp } from "../../adapters/http/ruleGateway.http";
import { RuleDTO } from "../../adapters/http/DTO/rule.DTO";

describe('Rule gateway on http', () => {
    let newRules: RuleModel[]
    let ruleHttp: RuleGatewayHttp
    let httpTestingController: HttpTestingController;
    let response: BaseDTO

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
        httpTestingController = TestBed.inject(HttpTestingController);
        ruleHttp = TestBed.inject(RuleGatewayHttp);
        newRules = [
            { id: 1, name: 'rule 1', infos: ''},
            { id: 2, name: 'rule 2', infos: ''}
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

    it('should retrieve all Rules', (done) => {
        const fakeData: RuleDTO[] = [
            { id: 1, name: 'rule 1', description: '', created: new Date(2023, 11, 14), updated: null},
            { id: 2, name: 'rule 2', description: '', created: new Date(2023, 11, 14), updated: null}
        ]
        response.data = { Rules: fakeData }

        ruleHttp.retrieveAll().subscribe(rules => {
            expect(rules).toEqual(newRules)
            done()
        })

        const req = httpTestingController.expectOne(URL_BASE + URL_RULE + URL_GET_ALL);
        expect(req.request.method).toBe('GET');
        req.flush(response);
    })

    it('should retrieve one Rule by id', (done) => {
        const fakeData: RuleDTO = { id: 1, name: 'rule 1', description: '', created: new Date(2023, 11, 14), updated: null}
        response.data = { rule: fakeData }

        ruleHttp.retrieveOneById(1).subscribe(rule => {
            expect(rule).toEqual(newRules[0])
            done()
        })

        const req = httpTestingController.expectOne(URL_BASE + URL_RULE + URL_GET_ONE + `/${1}`);
        expect(req.request.method).toBe('GET');
        req.flush(response);
    })

    it('should add new Rule', (done) => {
        const fakeData: RuleDTO[] = [
            { id: 1, name: 'rule 1', description: '', created: new Date(2023, 11, 14), updated: null},
            { id: 2, name: 'rule 2', description: '', created: new Date(2023, 11, 14), updated: null}
        ]
        response.data = { Rules: fakeData }
        const newRule: RuleModel = { id: 2, name: 'rule 2', infos: '' }

        ruleHttp.addNew(newRule).subscribe(rules => {
            expect(rules).toContainEqual(newRule)
            done()
        })

        const req = httpTestingController.expectOne(URL_BASE + URL_RULE + URL_ADD_NEW);
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual(newRule)
        req.flush(response);
    })

    it('should edit the Rule specified', (done) => {
        const fakeData: RuleDTO[] = [
            { id: 1, name: 'rule 1', description: '', created: new Date(2023, 11, 14), updated: null},
            { id: 2, name: 'rule 2 edited', description: '', created: new Date(2023, 11, 14), updated: null}
        ]
        response.data = { Rules: fakeData }
        const ruleEdited: RuleModel = { id: 2, name: 'rule 2 edited', infos: '' }

        ruleHttp.edit(ruleEdited).subscribe(Rules => {
            expect(Rules).toContainEqual(ruleEdited)
            done()
        })

        const req = httpTestingController.expectOne(URL_BASE + URL_RULE + URL_EDIT);
        expect(req.request.method).toBe('PUT');
        expect(req.request.body).toEqual(ruleEdited)
        req.flush(response);

    })

    it('should delete the Rule specified by id', (done) => {
        const fakeData: RuleDTO[] = [
            { id: 1, name: 'rule 1', description: '', created: new Date(2023, 11, 14), updated: null},
            { id: 2, name: 'rule 2', description: '', created: new Date(2023, 11, 14), updated: null}
        ]
        response.data = { Rules: fakeData}
        const RuleToDeleted: RuleModel = { id: 2, name: 'rule 2', infos: '' }

        ruleHttp.delete(RuleToDeleted).subscribe(Rules => {
            expect(Rules).not.toContain(RuleToDeleted)
            done()
        })
        const req = httpTestingController.expectOne(URL_BASE + URL_RULE + URL_DELETE + `/${RuleToDeleted.id}`);
        expect(req.request.method).toBe('DELETE');
        req.flush(response);
    })

})