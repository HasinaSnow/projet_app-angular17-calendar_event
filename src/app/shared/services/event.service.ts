import { Injectable, WritableSignal, signal } from "@angular/core";
import { IItem } from "../interfaces/item.interface";
import { IEvent } from "../interfaces/event.interface";

@Injectable({
    providedIn: 'root'
  })
export class EventService {
    eventItems: WritableSignal<IEvent[]> = signal<IEvent[]>([
        {
            id: 1,
            date: new Date(),
            clientEvent: { id: 1, name: 'customer'},
            placeEvent: { id: 1, name: 'silver wood'},
            categEvent: {id: 1, name: 'Decoration'},
            statusEvent: true
        }
    ])

    changeOrder(item: IItem) {
        console.log('change order')
    }

    changeFilter(item: IItem) {
        console.log('change filter')
    }
}