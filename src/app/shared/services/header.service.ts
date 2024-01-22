import { Injectable, WritableSignal, signal } from '@angular/core';
import { INavItem } from '../interfaces/nav-item.interface';
import { INotifItem } from '../interfaces/notif-item.interface';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  headerNavItem: WritableSignal<INavItem[]> = signal([] as INavItem[]);
  addBtnItems: INavItem[] = [
    {
      label: 'Journal',
      icon: 'edit_note',
      action: this.goToJournalForm()
    },
    {
      label: 'Event',
      icon: 'edit_calendar',
      action: this.goToEventForm()
    },
    {
      label: 'Task',
      icon: 'add_task',
      action: this.goToTaskForm()
    }
  ]
  notifItems: WritableSignal<INotifItem[]> = signal([
    {
      context: 'New Event from',
      infos: 'Tita & Kolety, 20 jan 2024, mariage',
      model: {
        id: 1,
        name: 'event',
        icon: 'edit_calendar'
      },
      user: {
        id: 1,
        name: 'H. Niaina',
        imageRef: ''
      },
      createdAt: new Date()
    },
    {
      context: 'New Task for you from',
      infos: 'pause couverts sur la table',
      model: {
        id: 1,
        name: 'task',
        icon: 'add_task'
      },
      user: {
        id: 1,
        name: 'H. Niaina',
        imageRef: ''
      },
      createdAt: new Date()
    },
    {
      context: 'New Journal for from',
      infos: 'transaction de mobile money vers cash',
      model: {
        id: 1,
        name: 'journal',
        icon: 'edit_note'
      },
      user: {
        id: 1,
        name: 'H. Niaina',
        imageRef: ''
      },
      createdAt: new Date()
    }
  ])

  goToJournalForm() {
    console.log('go to journal form')
  }

  goToEventForm() {
    console.log('go to event form')
  }

  goToTaskForm() {
    console.log('go to journal form')
  }
}
