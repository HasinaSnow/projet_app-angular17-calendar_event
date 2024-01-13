import { Component, Input } from '@angular/core';
import { IPlace } from '../../interfaces/place.interface';

@Component({
  selector: 'app-card-place',
  standalone: true,
  imports: [],
  templateUrl: './card-place.component.html',
  styleUrl: './card-place.component.scss'
})
export class CardPlaceComponent {
  @Input() placeItem: IPlace
}
