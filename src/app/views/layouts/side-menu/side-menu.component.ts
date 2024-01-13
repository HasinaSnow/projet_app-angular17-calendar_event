import { CommonModule } from '@angular/common';
import { Component, WritableSignal, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { INavItem } from '../../../shared/interfaces/nav-item.interface';
import { SideNavService } from '../../../shared/services/side-nav.service';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
  private navService = inject(SideNavService)
  navItems: WritableSignal<INavItem[]> = this.navService.sideNavItem

  ngOnInit() {
    this.navService.sideNavItem.set([
      {
        label: 'Home',
        icon: 'home',
        url: '/home'
      },
      {
        label: 'Members',
        icon: 'groups',
        url: '/members'
      },
      {
        label: 'Settings',
        icon: 'settings',
        url: '/settings'
      },
      {
        label: 'About',
        icon: 'contact_support',
        url: '/about'
      },
    ])
  }

  onLogout() {
    console.log('on logout')
  }
}
