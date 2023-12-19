import { Observable } from "rxjs";
import { TypeModel } from "../models/type.model";

export abstract class TypeGateway {
    abstract retrieveAll(): Observable<TypeModel[]>
    abstract retrieveOneById(id: number): Observable<TypeModel|null>
    abstract addNew(newType: TypeModel): Observable<TypeModel[]>
    abstract edit(typeEdited: TypeModel): Observable<TypeModel[]|null>
    abstract delete(typeToDeleted: TypeModel): Observable<TypeModel[]|null>
}