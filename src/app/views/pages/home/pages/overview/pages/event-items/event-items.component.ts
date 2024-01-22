import { Component, WritableSignal, inject } from '@angular/core';
import { CardEventComponent } from '../../../../../../../shared/components/card-event/card-event.component';
import { IItem } from '../../../../../../../shared/interfaces/item.interface';
import { OrderService } from '../../../../../../../shared/services/order.service';
import { FilterService } from '../../../../../../../shared/services/filter.service';
import { IEvent } from '../../../../../../../shared/interfaces/event.interface';
import { EventService } from '../../../../../../../shared/services/event.service';
import { DropdownComponent } from '../../../../../../../shared/components/dropdown/dropdown.component';

@Component({
  selector: 'app-event-items',
  standalone: true,
  imports: [DropdownComponent, CardEventComponent],
  templateUrl: './event-items.component.html',
  styleUrl: './event-items.component.scss'
})
export class EventItemsComponent {
  private eventService = inject(EventService)
  filterDateItems: IItem[] = inject(FilterService).filterDateItems
  orderItems: IItem[] = inject(OrderService).orderItems

  events: WritableSignal<IEvent[]> = this.eventService.eventItems

  onOrderValue(item: IItem) {
    this.eventService.changeOrder(item)
  }

  onFilterValue(item: IItem) {
    this.eventService.changeFilter(item)
  }
}
