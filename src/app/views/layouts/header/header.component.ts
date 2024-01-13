import { Component, WritableSignal, inject, signal } from '@angular/core';
import { INavItem } from '../../../shared/interfaces/nav-item.interface';
import { HeaderService } from '../../../shared/services/header.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navItems: WritableSignal<INavItem[]> = inject(HeaderService).headerNavItem
}
