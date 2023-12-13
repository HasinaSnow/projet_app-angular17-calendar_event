import { TypeGatewayInMemory } from "../../adapters/inmemory/typeGateway.inmemory"
import { TypeModel } from "../../models/type.model"

describe('Type gateway in memory', () => {
    let newTypes: TypeModel[]
    let inMemoryTypes: TypeGatewayInMemory

    beforeEach(() => {
        newTypes = [
            { id: 1, name: 'Wedding', infos: ''},
            { id: 2, name: 'Reunion', infos: ''}
        ]
        inMemoryTypes = new TypeGatewayInMemory().withTypes(newTypes)
    })

    it('should retrieve all types', (done) => {
        inMemoryTypes.retrieveAll().subscribe(types => {
            expect(types).toEqual(newTypes)
            done()
        })
    })

    it('should retrieve one type by id', (done) => {
        inMemoryTypes.retrieveOneById(1).subscribe(type => {
            expect(type).toEqual(newTypes[0])
            done()
        })
    })

    it('should add new type', (done) => {
        const typeToAdded: TypeModel = {id: 0, name: 'Job', infos: ''}
        inMemoryTypes.addNew(typeToAdded).subscribe(type => {
            expect(type).toEqual(typeToAdded)
            // type added should be the last id
            expect(type.id).toBe(3)
            done()
        })
    })

    it('should edit the type specified', (done) => {
        const typeEdited: TypeModel = { id: 2, name: 'Sortie', infos: '' }
        inMemoryTypes.edit(typeEdited)
        inMemoryTypes.retrieveOneById(2).subscribe(type => {
            expect(type).toEqual(typeEdited)
            done()
        })
    })

    it('should delete the type specified by id', (done) => {
        const idTypetoDelete: number = newTypes[0].id
        inMemoryTypes.delete(idTypetoDelete)
        inMemoryTypes.retrieveOneById(idTypetoDelete).subscribe(type => {
            expect(type).toBeNull()
            done()
        })
    })

})