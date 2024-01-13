import { Component, WritableSignal, inject } from '@angular/core';
import { IItem } from '../../../../../../../shared/interfaces/item.interface';
import { OrderService } from '../../../../../../../shared/services/order.service';
import { IPlace } from '../../../../../../../shared/interfaces/place.interface';
import { PlaceService } from '../../../../../../../shared/services/place.service';
import { DropdownComponent } from '../../../../../../../shared/components/dropdown/dropdown.component';
import { CardPlaceComponent } from '../../../../../../../shared/components/card-place/card-place.component';

@Component({
  selector: 'app-place-items',
  standalone: true,
  imports: [DropdownComponent, CardPlaceComponent],
  templateUrl: './place-items.component.html',
  styleUrl: './place-items.component.scss'
})
export class PlaceItemsComponent {
  private placeService = inject(PlaceService)

  orderItems: IItem[] = inject(OrderService).orderItems
  places: WritableSignal<IPlace[]> = this.placeService.placeItems

  onOrderValue(item: IItem) {
    this.placeService.changeOrder(item)
  }
}
