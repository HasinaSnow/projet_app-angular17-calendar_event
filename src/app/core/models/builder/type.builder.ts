import { TypeModel } from "../type.model";

export class TypeBuilder {
    protected id: number
    protected name: string
    protected infos: string

    withId(id: number): TypeBuilder {
        this.id = id
        return this
    }

    withName(name: string): TypeBuilder {
        this.name = name
        return this
    }

    withInfos(infos: string): TypeBuilder {
        this.infos = infos
        return this
    }

    build(): TypeModel {
        return { id: this.id, name: this.name, infos: this.infos }
    }

}