import { Component, WritableSignal, inject } from '@angular/core';
import { UserService } from '../../../../../../../shared/services/user.service';
import { IItem } from '../../../../../../../shared/interfaces/item.interface';
import { FilterService } from '../../../../../../../shared/services/filter.service';
import { OrderService } from '../../../../../../../shared/services/order.service';
import { DropdownComponent } from '../../../../../../../shared/components/dropdown/dropdown.component';
import { IUser } from '../../../../../../../shared/interfaces/user.interface';
import { CardUserComponent } from '../../../../../../../shared/components/card-user/card-user.component';

@Component({
  selector: 'app-user-items',
  standalone: true,
  imports: [DropdownComponent, CardUserComponent],
  templateUrl: './user-items.component.html',
  styleUrl: './user-items.component.scss'
})
export class UserItemsComponent {
  private userService = inject(UserService)

  filterUserItems: IItem[] = inject(FilterService).filterUserItems
  orderUserItems: IItem[] = inject(OrderService).orderUserItems

  users: WritableSignal<IUser[]> = this.userService.userItems

  onOrderValue(item: IItem) {
    this.userService.changeOrder(item)
  }

  onFilterValue(item: IItem) {
    this.userService.changeFilter(item)
  }
}
