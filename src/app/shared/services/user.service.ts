import { Injectable, WritableSignal, signal } from "@angular/core";
import { IItem } from "../interfaces/item.interface";
import { IUser } from "../interfaces/user.interface";

@Injectable({
    providedIn: 'root'
  })
export class UserService {
    userItems: WritableSignal<IUser[]> = signal<IUser[]>([
        {
            id: 1,
            name: 'H. Niaina',
            servicesUser: [
                {id: 1, name: 'Decoration'},
                {id: 2, name: 'Staff'}
            ],
            rulesUser: [
                {id: 1, name: 'ADMIN'},
                {id: 2, name: 'TASK_MANAGER'}
            ],
            online: true
        }
    ])

    changeOrder(item: IItem) {
        console.log('change order')
    }

    changeFilter(item: IItem) {
        console.log('change filter')
    }
}