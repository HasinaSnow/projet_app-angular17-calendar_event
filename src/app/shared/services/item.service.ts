import { Injectable, Signal, WritableSignal, computed } from "@angular/core";
import { INavItem } from "../interfaces/nav-item.interface";

@Injectable({
    providedIn: 'root'
  })
export class ItemService {

    computeItemActive(items: WritableSignal<INavItem[]>): Signal<INavItem> {
        return computed(() => {
            return items().filter(item => item.active === true)[0]
          })
    }

    activeItem(items: WritableSignal<INavItem[]>, item: INavItem) {
        items.update(values => values.map(value => {
            if(value == item) value.active = true
            else value.active = false
            return value
        }))
    }

}