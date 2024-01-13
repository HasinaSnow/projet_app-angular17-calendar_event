import { Component, Input } from '@angular/core';
import { IEvent } from '../../interfaces/event.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-event.component.html',
  styleUrl: './card-event.component.scss'
})
export class CardEventComponent {
  @Input({required: true}) eventItem: IEvent
}
