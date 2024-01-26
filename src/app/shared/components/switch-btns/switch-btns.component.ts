import { Component, EventEmitter, Input, OnInit, Output, WritableSignal, signal } from '@angular/core';
import { IItem } from '../../interfaces/item.interface';

@Component({
  selector: 'app-switch-btns',
  standalone: true,
  imports: [],
  templateUrl: './switch-btns.component.html',
  styleUrl: './switch-btns.component.scss'
})
export class SwitchBtnsComponent implements OnInit {
  @Input({required: true}) btnItems: IItem[]

  @Output() valueEmitted: EventEmitter<IItem> = new EventEmitter()
  btnSelected: WritableSignal<IItem> = signal({} as IItem)
  @Input() defaultValue: number = 1

  ngOnInit(): void {
    this.btnSelected.set(this.btnItems.find(item => item.id == this.defaultValue) || {label: 'item 1', id: 1}) 
    // this.valueEmitted.emit(this.btnSelected())
  }

  onSelect(item: IItem) {
    this.btnSelected.set(this.btnItems.filter(value => value == item)[0])
    this.valueEmitted.emit(this.btnSelected())
  }

}
