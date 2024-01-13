import { Component, Input } from '@angular/core';
import { ICateg } from '../../interfaces/category.interface';

@Component({
  selector: 'app-card-categ',
  standalone: true,
  imports: [],
  templateUrl: './card-categ.component.html',
  styleUrl: './card-categ.component.scss'
})
export class CardCategComponent {
  @Input() categItem: ICateg
}
