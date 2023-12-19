import { TypeGatewayLocalStorage } from "../../adapters/localStorage/typeGateway.localStorage"
import { TypeModel } from "../../models/type.model"

describe('Type gateway in memory', () => {
    let newTypes: TypeModel[]
    let onLocalStorageType: TypeGatewayLocalStorage

    beforeEach(() => {
        newTypes = [
            { id: 1, name: 'Wedding', infos: ''},
            { id: 2, name: 'Reunion', infos: ''}
        ]
        onLocalStorageType = new TypeGatewayLocalStorage().withTypes(newTypes)
    })

    it('should retrieve all types', (done) => {
        onLocalStorageType.retrieveAll().subscribe(types => {
            expect(types).toEqual(newTypes)
            done()
        })
    })

    it('should retrieve one type by id', (done) => {
        onLocalStorageType.retrieveOneById(1).subscribe(type => {
            expect(type).toEqual(newTypes[0])
            done()
        })
    })

    it('should add new type', (done) => {
        const typeToAdded: TypeModel = { id: 0, name: 'Job', infos: '' }
        onLocalStorageType.addNew(typeToAdded).subscribe(types => {
            expect(types).toContainEqual(typeToAdded)
            done()
        })
    })

    it('should edit the type specified', (done) => {
        const typeEdited: TypeModel = { id: 2, name: 'Sortie', infos: '' }
        onLocalStorageType.edit(typeEdited).subscribe(types => {
            if(types != null)
                expect(types).toContainEqual(typeEdited)
            done()
        })
    })

    it('should delete the type specified by id', (done) => {
        const typeToDeleted = newTypes[0]
        onLocalStorageType.delete(typeToDeleted).subscribe(types => {
            if(types != null)
                expect(types).not.toContain(typeToDeleted)
            done()
        })
    })

})