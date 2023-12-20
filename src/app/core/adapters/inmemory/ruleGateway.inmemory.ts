import { Observable, of } from "rxjs";
import { RuleGateway } from "../../ports/rule.gateways";
import { RuleModel } from "../../models/rule.model";

export class RuleGatewayInMemory extends RuleGateway {

    private rules: RuleModel[] = []

    withRules(rules: RuleModel[]): RuleGatewayInMemory {
        this.rules = rules
        return this
    }

    retrieveAll(): Observable<RuleModel[]> {
        return of(this.rules)
    }

    retrieveOneById(id: number): Observable<RuleModel|null> {
        const ruleRetrieved = this.rules.find(rule => rule.id == id)
        return of(ruleRetrieved || null)
    }

    addNew(newRule: RuleModel): Observable<RuleModel[]> {
        newRule.id = this.getlastId() + 1
        this.rules = [...this.rules, newRule]
        return of(this.rules)
    }

    edit(ruleEdited: RuleModel): Observable<RuleModel[]|null> {
        if(this.rules.find(rule => rule.id === ruleEdited.id) == undefined)
            return of(null)
        this.rules = this.rules.map(rule => rule.id == ruleEdited.id ? ruleEdited : rule)
        return of(this.rules)
    }

    delete(ruleToDeleted: RuleModel): Observable<RuleModel[]|null> {
        if(this.rules.find(rule => rule.id === ruleToDeleted.id) == undefined)
            return of(null)
        this.rules = this.rules.filter(rule => rule.id != ruleToDeleted.id)
        return of(this.rules)
    }

    private getlastId(): number {
        const lastruleAdded = this.rules.reduce((value, next) => value > next ? value : next)
        return lastruleAdded.id
    }

}