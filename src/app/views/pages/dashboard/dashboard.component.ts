import { CommonModule } from '@angular/common';
import { Component, WritableSignal, signal } from '@angular/core';
import { BreadCrumbsComponent } from '../../../shared/components/bread-crumbs/bread-crumbs.component';
import { IItem } from '../../../shared/interfaces/item.interface';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, BreadCrumbsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  crumbs: WritableSignal<IItem[]> = signal<IItem[]>([
    {id: 1, label: 'Dashboard', icon: 'dashboard'},
    {id: 1, label: 'Admin'}
  ])

}
