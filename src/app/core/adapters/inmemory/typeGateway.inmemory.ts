import { Observable, of } from "rxjs";
import { TypeModel } from "../../models/type.model";
import { TypeGateway } from "../../ports/type.gateways";

export class TypeGatewayInMemory extends TypeGateway {

    private types: TypeModel[] = []

    withTypes(types: TypeModel[]): TypeGatewayInMemory {
        this.types = types
        return this
    }

    retrieveAll(): Observable<TypeModel[]> {
        return of(this.types)
    }

    retrieveOneById(id: number): Observable<TypeModel|null> {
        const typeRetrieved = this.types.find(type => type.id == id)
        return of(typeRetrieved || null)
    }

    addNew(newType: TypeModel): Observable<TypeModel> {
        newType.id = this.getlastId() + 1
        this.types = [...this.types, newType]
        return of(newType)
    }

    edit(typeEdited: TypeModel): Observable<TypeModel> {
        this.types = this.types.map(type => type.id == typeEdited.id ? typeEdited : type)
        return of(typeEdited)
    }

    delete(id: number): Observable<boolean> {
        this.types = this.types.filter(type => type.id != id)
        return of(true)
    }

    private getlastId(): number {
        const lastTypeAdded = this.types.reduce((value, next) => value > next ? value : next)
        return lastTypeAdded.id
    }

}