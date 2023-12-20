import { Observable, of } from "rxjs";
import { RuleGateway } from "../../ports/rule.gateways";
import { RuleModel } from "../../models/rule.model";

export class RuleGatewayLocalStorage extends RuleGateway {

    withRules(rules: RuleModel[]): RuleGatewayLocalStorage {
        this.updateRules([ ...rules])
        return this
    }

    retrieveAll(): Observable<RuleModel[]> {
        return of(this.getRules())
    }

    retrieveOneById(id: number): Observable<RuleModel | null> {
        const oneById = this.getOne(id)
        return of(oneById != undefined ? oneById : null)
    }

    addNew(newRule: RuleModel): Observable<RuleModel[]> {
       const Rules = this.getRules()
       const lastId = this.getLastId()
       newRule.id = lastId + 1
       return of(this.updateRules([ ...Rules, newRule]))
    }

    edit(Rule: RuleModel): Observable<RuleModel[] | null> {
        const Rules = this.getRules()
        if(Rules.find(Rule => Rule.id == Rule.id) === undefined)
            return of(null)
        const newRules: RuleModel[] = Rules.map(e => e.id == Rule.id ? Rule : e )
        return of(this.updateRules(newRules))
    }

    delete(ruleToDeleted: RuleModel): Observable<RuleModel[]|null> {
        const Rules = this.getRules()
        if(Rules.find(rule => rule.id == ruleToDeleted.id) === undefined)
            return of(null)
        const newRules = this.getRules().filter(Rule => Rule !== ruleToDeleted)
        return of(this.updateRules(newRules))
    }

    private getRules(): RuleModel[] {
        const Rules = localStorage.getItem('rules')
        return Rules ? JSON.parse(Rules) : [] as RuleModel[]
    }

    private getOne(id: number): RuleModel|undefined {
        const Rules = this.getRules()
        const oneByid = Rules.find(rule => rule.id == id)
        return oneByid
    }

    private getLastId(): number{
        const RulesUsed = this.getRules()
        const lastRule = RulesUsed.pop()
        return lastRule != undefined ? lastRule.id : 1
    }

    private updateRules(Rules: RuleModel[]): RuleModel[] {
        localStorage.setItem('rules', JSON.stringify(Rules))
        return this.getRules()
    }
}