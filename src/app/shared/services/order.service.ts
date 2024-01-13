import { Injectable } from "@angular/core";
import { IItem } from "../interfaces/item.interface";

@Injectable({
    providedIn: 'root'
  })
  export class OrderService {

    orderItems: IItem[] = [
      {label: 'By new', id: 1},
      {label: 'By latest', id: 2},
      {label: 'By asc', id: 3},
      {label: 'By desc', id: 4},
    ]

    orderUserItems: IItem[] = [
      {label: 'By new', id: 1},
      {label: 'By latest', id: 2},
      {label: 'By rules', id: 3},
      {label: 'By services', id: 4},
    ]
  }