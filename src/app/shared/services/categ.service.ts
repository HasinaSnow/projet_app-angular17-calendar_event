import { Injectable, WritableSignal, signal } from "@angular/core";
import { IItem } from "../interfaces/item.interface";
import { ICateg } from "../interfaces/category.interface";

@Injectable({
    providedIn: 'root'
  })
export class CategService {
    categItems: WritableSignal<ICateg[]> = signal<ICateg[]>([
        {
            id: 1,
            name: 'Decoration',
            infos: 'description of decoration'
        }
    ])

    changeOrder(item: IItem) {
        console.log('change order')
    }
}