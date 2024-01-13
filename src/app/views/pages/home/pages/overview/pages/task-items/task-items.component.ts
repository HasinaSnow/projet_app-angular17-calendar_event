import { Component, WritableSignal, inject } from '@angular/core';
import { DropdownComponent } from '../../../../../../../shared/components/dropdown/dropdown.component';
import { IItem } from '../../../../../../../shared/interfaces/item.interface';
import { FilterService } from '../../../../../../../shared/services/filter.service';
import { OrderService } from '../../../../../../../shared/services/order.service';
import { CardTaskComponent } from '../../../../../../../shared/components/card-task/card-task.component';
import { Itask } from '../../../../../../../shared/interfaces/task.interface';
import { TaskService } from '../../../../../../../shared/services/task.service';

@Component({
  selector: 'app-task-items',
  standalone: true,
  imports: [DropdownComponent, CardTaskComponent],
  templateUrl: './task-items.component.html',
  styleUrl: './task-items.component.scss'
})
export class TaskItemsComponent {
  private taskService = inject(TaskService)

  filterDateItems: IItem[] = inject(FilterService).filterDateItems
  orderItems: IItem[] = inject(OrderService).orderItems

  tasks: WritableSignal<Itask[]> = this.taskService.taskItems

  onOrderValue(item: IItem) {
    this.taskService.changeOrder(item)
  }

  onFilterValue(item: IItem) {
    this.taskService.changeFilter(item)
  }
}
