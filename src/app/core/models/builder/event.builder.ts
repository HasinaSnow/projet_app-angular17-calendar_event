import { EventModel } from "../event.model"

export class EventBuilder {
    protected id: number
    protected date: Date
    protected typeRef: number

    withId(id: number): EventBuilder {
        this.id = id
        return this
    }

    withDate(date: Date): EventBuilder {
        this.date = date
        return this
    }

    withTypeRef(typeRef: number): EventBuilder {
        this.typeRef = typeRef
        return this
    }

    build(): EventModel {
        return { id: this.id, date: this.date, typeRef: this.typeRef }
    }

}