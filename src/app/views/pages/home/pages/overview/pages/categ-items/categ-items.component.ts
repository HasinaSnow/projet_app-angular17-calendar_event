import { Component, WritableSignal, inject } from '@angular/core';
import { IItem } from '../../../../../../../shared/interfaces/item.interface';
import { OrderService } from '../../../../../../../shared/services/order.service';
import { ICateg } from '../../../../../../../shared/interfaces/category.interface';
import { CategService } from '../../../../../../../shared/services/categ.service';
import { DropdownComponent } from '../../../../../../../shared/components/dropdown/dropdown.component';
import { CardCategComponent } from '../../../../../../../shared/components/card-categ/card-categ.component';

@Component({
  selector: 'app-categ-items',
  standalone: true,
  imports: [DropdownComponent, CardCategComponent],
  templateUrl: './categ-items.component.html',
  styleUrl: './categ-items.component.scss'
})
export class CategItemsComponent {
  private categService = inject(CategService)

  orderItems: IItem[] = inject(OrderService).orderItems
  categs: WritableSignal<ICateg[]> = this.categService.categItems

  onOrderValue(item: IItem) {
    this.categService.changeOrder(item)
  }
}
