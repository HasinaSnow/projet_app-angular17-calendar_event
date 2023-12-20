import { UserModel } from "../user.model"

export class UserBuilder {
    protected id: number
    protected name: string
    protected email: string
    protected rulesRef: number[]

    withId(id: number): UserBuilder {
        this.id = id
        return this
    }

    withName(name: string): UserBuilder {
        this.name = name
        return this
    }

    withEmail(email: string): UserBuilder {
        this.email = email
        return this
    }

    withRulesRef(rulesRef: number[]): UserBuilder {
        this.rulesRef = rulesRef
        return this
    }

    build(): UserModel {
        return { id: this.id, name: this.name, email: this.email, rulesRef: this.rulesRef }
    }

}