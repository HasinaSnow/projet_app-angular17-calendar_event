import { Injectable } from '@angular/core';
import { IItem } from '../interfaces/item.interface';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  filterDateItems: IItem[] = [
    {label: 'This week', id: 1},
    {label: 'This month', id: 2},
    {label: 'This year', id: 3},
  ]

  filterUserItems: IItem[] = [
    {
      id: 1,
      label: 'All'
    },
    {
      label: 'Services',
      id: 2,
      types: [
        {label: 'Decoration', id: 1},
        {label: 'Staff', id: 2}
      ]
    },
    {
      label: 'Rules',
      id: 3,
      types: [
        {label: 'ADMIN', id: 1},
        {label: 'TASK_MANAGER', id: 2},
      ]
    }
  ]

}