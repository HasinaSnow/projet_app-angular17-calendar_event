import { Component } from '@angular/core';
import { CalendarComponent } from '../../components/calendar/calendar.component';

@Component({
  selector: 'app-side-calendar',
  standalone: true,
  imports: [CalendarComponent],
  templateUrl: './side-calendar.component.html',
  styleUrl: './side-calendar.component.scss'
})
export class SideCalendarComponent {

}
