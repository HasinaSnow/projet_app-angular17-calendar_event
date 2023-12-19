import { Observable, of } from "rxjs";
import { TypeModel } from "../../models/type.model";
import { TypeGateway } from "../../ports/type.gateways";


export class TypeGatewayLocalStorage extends TypeGateway {

    withTypes(types: TypeModel[]): TypeGatewayLocalStorage {
        this.updateTypes([ ...types])
        return this
    }

    retrieveAll(): Observable<TypeModel[]> {
        return of(this.getTypes())
    }

    retrieveOneById(id: number): Observable<TypeModel | null> {
        const oneById = this.getOne(id)
        return of(oneById != undefined ? oneById : null)
    }

    addNew(newType: TypeModel): Observable<TypeModel[]> {
       const types = this.getTypes()
       const lastId = this.getLastId()
       newType.id = lastId + 1
       return of(this.updateTypes([ ...types, newType]))
    }

    edit(type: TypeModel): Observable<TypeModel[] | null> {
        const types = this.getTypes()
        if(types.find(type => type.id == type.id) === undefined)
            return of(null)
        const newtypes: TypeModel[] = types.map(e => e.id == type.id ? type : e )
        return of(this.updateTypes(newtypes))
    }

    delete(typeToDeleted: TypeModel): Observable<TypeModel[]|null> {
        const types = this.getTypes()
        if(types.find(type => type.id == typeToDeleted.id) === undefined)
            return of(null)
        const newtypes = this.getTypes().filter(type => type !== typeToDeleted)
        return of(this.updateTypes(newtypes))
    }

    private getTypes(): TypeModel[] {
        const types = localStorage.getItem('types')
        return types ? JSON.parse(types) : [] as TypeModel[]
    }

    private getOne(id: number): TypeModel|undefined {
        const types = this.getTypes()
        const oneByid = types.find(type => type.id == id)
        return oneByid
    }

    private getLastId(): number{
        const typesUsed = this.getTypes()
        const lasttype = typesUsed.pop()
        return lasttype != undefined ? lasttype.id : 1
    }

    private updateTypes(types: TypeModel[]): TypeModel[] {
        localStorage.setItem('types', JSON.stringify(types))
        return this.getTypes()
    }
}