import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from './views/layouts/side-menu/side-menu.component';
import { HeaderComponent } from './views/layouts/header/header.component';
import { SideCalendarComponent } from './views/layouts/side-calendar/side-calendar.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SideMenuComponent,
    HeaderComponent,
    SideCalendarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'app-ng17';

  ngOnInit(): void {
    initFlowbite();
  }
}
