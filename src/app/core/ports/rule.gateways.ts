import { Observable } from "rxjs";
import { RuleModel } from "../models/rule.model";

export abstract class RuleGateway {
    abstract retrieveAll(): Observable<RuleModel[]>
    abstract retrieveOneById(id: number): Observable<RuleModel|null>
    abstract addNew(newRule: RuleModel): Observable<RuleModel[]>
    abstract edit(RuleEdited: RuleModel): Observable<RuleModel[]|null>
    abstract delete(RuleToDeleted: RuleModel): Observable<RuleModel[]|null>
}