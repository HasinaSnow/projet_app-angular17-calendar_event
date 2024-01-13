import { Injectable, WritableSignal, signal } from "@angular/core";
import { Itask } from "../interfaces/task.interface";
import { IItem } from "../interfaces/item.interface";

@Injectable({
    providedIn: 'root'
  })
export class TaskService {
    taskItems: WritableSignal<Itask[]> = signal([
        {
            id: 1,
            action: 'Meeting in the office',
            eventTask: {
                id: 1,
                date: new Date()
            },
            clientEventTask: {
                id: 1,
                name: 'Custormer'
            },
            serviceEventTask: {
                id: 1,
                name: 'Decoration'
            },
            userTask: {
                id: 1,
                name: 'H. Niaina'
            } 
        }
    ])

    changeOrder(item: IItem) {
        console.log('change order')
    }

    changeFilter(item: IItem) {
        console.log('change filter')
    }
}