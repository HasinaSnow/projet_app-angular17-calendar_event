import { Component, WritableSignal, inject } from '@angular/core';
import { DropdownComponent } from '../../../../../shared/components/dropdown/dropdown.component';
import { UserService } from '../../../../../shared/services/user.service';
import { FilterService } from '../../../../../shared/services/filter.service';
import { IUser } from '../../../../../shared/interfaces/user.interface';
import { CardUserComponent } from '../../../../../shared/components/card-user/card-user.component';
import { OrderService } from '../../../../../shared/services/order.service';

@Component({
  selector: 'app-list-member',
  standalone: true,
  imports: [DropdownComponent, CardUserComponent],
  templateUrl: './list-member.component.html',
  styleUrl: './list-member.component.scss'
})
export class ListMemberComponent {
  private userService = inject(UserService)
  
  orderMemberItems = inject(OrderService).orderUserItems
  filterMemberItems = inject(FilterService).filterUserItems
  members: WritableSignal<IUser[]> = this.userService.userItems

  onSearch() {
    console.log('search member')
  }
}
