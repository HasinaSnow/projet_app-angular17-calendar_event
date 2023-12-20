import { RuleGatewayInMemory } from "../../adapters/inmemory/ruleGateway.inmemory"
import { RuleModel } from "../../models/rule.model"


describe('Rule gateway in memory', () => {
    let newRules: RuleModel[]
    let inMemoryRules: RuleGatewayInMemory

    beforeEach(() => {
        newRules = [
            { id: 1, name: 'rule 1', infos: ''},
            { id: 2, name: 'rule 2', infos: ''}
        ]
        inMemoryRules = new RuleGatewayInMemory().withRules(newRules)
    })

    it('should retrieve all Rules', (done) => {
        inMemoryRules.retrieveAll().subscribe(Rules => {
            expect(Rules).toEqual(newRules)
            done()
        })
    })

    it('should retrieve one Rule by id', (done) => {
        inMemoryRules.retrieveOneById(1).subscribe(Rule => {
            expect(Rule).toEqual(newRules[0])
            done()
        })
    })

    it('should add new Rule', (done) => {
        const RuleToAdded: RuleModel = {id: 0, name: 'rule 3', infos: ''}
        inMemoryRules.addNew(RuleToAdded).subscribe(Rules => {
            expect(Rules).toContainEqual(RuleToAdded)
            done()
        })
    })

    it('should edit the Rule specified', (done) => {
        const RuleEdited: RuleModel = { id: 2, name: 'rule 2 edited', infos: '' }
        inMemoryRules.edit(RuleEdited).subscribe(Rules => {
            if(Rules != null)
                expect(Rules).toContainEqual(RuleEdited)
            done()
        })
    })

    it('should delete the Rule specified by id', (done) => {
        const RuleToDeleted = newRules[0]
        inMemoryRules.delete(RuleToDeleted).subscribe(Rules => {
            if(Rules != null)
                expect(Rules).not.toContain(RuleToDeleted)
            done()
        })
    })

})