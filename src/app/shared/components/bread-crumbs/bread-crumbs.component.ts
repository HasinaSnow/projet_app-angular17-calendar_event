import { CommonModule } from '@angular/common';
import { Component, Input, WritableSignal, signal } from '@angular/core';
import { IItem } from '../../interfaces/item.interface';

@Component({
  selector: 'app-bread-crumbs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bread-crumbs.component.html',
  styleUrl: './bread-crumbs.component.scss'
})
export class BreadCrumbsComponent {

  @Input({required: true}) crumbs: WritableSignal<IItem[]> = signal([] as IItem[])

}
