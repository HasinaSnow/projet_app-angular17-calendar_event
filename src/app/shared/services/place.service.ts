import { Injectable, WritableSignal, signal } from "@angular/core";
import { IItem } from "../interfaces/item.interface";
import { IPlace } from "../interfaces/place.interface";

@Injectable({
    providedIn: 'root'
  })
export class PlaceService {
    placeItems: WritableSignal<IPlace[]> = signal<IPlace[]>([
        {
            id: 1,
            name: 'Silver wood',
            infos: 'description of silver wood'
        }
    ])

    changeOrder(item: IItem) {
        console.log('change order')
    }
}