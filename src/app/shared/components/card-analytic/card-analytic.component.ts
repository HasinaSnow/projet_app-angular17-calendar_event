import { Component, Input } from '@angular/core';
import { IStatItem } from '../../interfaces/stat-item.interface';

@Component({
  selector: 'app-card-analytic',
  standalone: true,
  imports: [],
  templateUrl: './card-analytic.component.html',
  styleUrl: './card-analytic.component.scss'
})
export class CardAnalyticComponent {
  @Input({required: true}) item: IStatItem
}
