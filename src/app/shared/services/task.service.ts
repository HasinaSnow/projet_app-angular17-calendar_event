import { Injectable, WritableSignal, signal } from "@angular/core";
import { ItaskItem } from "../interfaces/task.interface";
import { IItem } from "../interfaces/item.interface";

@Injectable({
    providedIn: 'root'
  })
export class TaskService {
    taskItems: WritableSignal<ItaskItem[]> = signal<ItaskItem[]>([
        {
            id: 1,
            action: 'Meeting in the office',
            delais: new Date(),
            serviceTask: {
                id: 1,
                name: 'Decoration'
            },
            eventTask: {
                id: 1,
                date: new Date(),
                place: {
                    id: 1,
                    name: 'london'
                }
            },
            userAttributed: {
                id: 1,
                name: 'H. Niaina'
            },
            createdAt: new Date()
        }
    ])

    changeOrder(item: IItem) {
        console.log('change order')
    }

    changeFilter(item: IItem) {
        console.log('change filter')
    }
}