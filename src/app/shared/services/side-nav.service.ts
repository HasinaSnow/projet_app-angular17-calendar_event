import { Injectable, WritableSignal, signal } from "@angular/core";
import { INavItem } from "../interfaces/nav-item.interface";

@Injectable({
    providedIn: 'root'
  })
export class SideNavService {
   sideNavItem: WritableSignal<INavItem[]> = signal([] as INavItem[])
}