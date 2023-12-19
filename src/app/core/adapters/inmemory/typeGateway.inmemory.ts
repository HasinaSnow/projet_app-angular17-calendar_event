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

    addNew(newType: TypeModel): Observable<TypeModel[]> {
        newType.id = this.getlastId() + 1
        this.types = [...this.types, newType]
        return of(this.types)
    }

    edit(typeEdited: TypeModel): Observable<TypeModel[]|null> {
        if(this.types.find(type => type === typeEdited) == undefined)
            return of(null)
        this.types = this.types.map(type => type.id == typeEdited.id ? typeEdited : type)
        return of(this.types)
    }

    delete(typeToDeleted: TypeModel): Observable<TypeModel[]|null> {
        if(this.types.find(type => type.id === typeToDeleted.id) == undefined)
            return of(null)
        this.types = this.types.filter(type => type.id != typeToDeleted.id)
        return of(this.types)
    }

    private getlastId(): number {
        const lastTypeAdded = this.types.reduce((value, next) => value > next ? value : next)
        return lastTypeAdded.id
    }

}