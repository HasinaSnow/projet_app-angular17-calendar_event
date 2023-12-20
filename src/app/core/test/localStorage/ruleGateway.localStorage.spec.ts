import { RuleGatewayLocalStorage } from "../../adapters/localStorage/rule.Gateway.localStorage"
import { RuleModel } from "../../models/rule.model"

describe('Rule gateway in localStorage', () => {
    let newRules: RuleModel[]
    let onLocalStorageRule: RuleGatewayLocalStorage

    beforeEach(() => {
        newRules = [
            { id: 1, name: 'rule 1', infos: ''},
            { id: 2, name: 'rule 2', infos: ''}
        ]
        onLocalStorageRule = new RuleGatewayLocalStorage().withRules(newRules)
    })

    it('should retrieve all Rules', (done) => {
        onLocalStorageRule.retrieveAll().subscribe(rules => {
            expect(rules).toEqual(newRules)
            done()
        })
    })

    it('should retrieve one Rule by id', (done) => {
        onLocalStorageRule.retrieveOneById(1).subscribe(Rule => {
            expect(Rule).toEqual(newRules[0])
            done()
        })
    })

    it('should add new Rule', (done) => {
        const RuleToAdded: RuleModel = { id: 0, name: 'rule 3', infos: '' }
        onLocalStorageRule.addNew(RuleToAdded).subscribe(rules => {
            expect(rules).toContainEqual(RuleToAdded)
            done()
        })
    })

    it('should edit the Rule specified', (done) => {
        const RuleEdited: RuleModel = { id: 2, name: 'rule 2 edited', infos: '' }
        onLocalStorageRule.edit(RuleEdited).subscribe(Rules => {
            if(Rules != null)
                expect(Rules).toContainEqual(RuleEdited)
            done()
        })
    })

    it('should delete the Rule specified by id', (done) => {
        const RuleToDeleted = newRules[0]
        onLocalStorageRule.delete(RuleToDeleted).subscribe(rules => {
            if(rules != null)
                expect(rules).not.toContain(RuleToDeleted)
            done()
        })
    })

})