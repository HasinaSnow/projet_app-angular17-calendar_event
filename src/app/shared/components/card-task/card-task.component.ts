import { Component, Input, Signal } from '@angular/core';
import { ItaskItem } from '../../interfaces/task.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-task.component.html',
  styleUrl: './card-task.component.scss'
})
export class CardTaskComponent {
  @Input({required: true}) taskItem: ItaskItem
}
