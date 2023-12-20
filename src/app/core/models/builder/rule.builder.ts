import { RuleModel } from "../rule.model"

export class RuleBuilder {
    protected id: number
    protected name: string
    protected infos: string

    withId(id: number): RuleBuilder {
        this.id = id
        return this
    }

    withName(name: string): RuleBuilder {
        this.name = name
        return this
    }

    withInfos(infos: string): RuleBuilder {
        this.infos = infos
        return this
    }

    build(): RuleModel {
        return { id: this.id, name: this.name, infos: this.infos }
    }

}