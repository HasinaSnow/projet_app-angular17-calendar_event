import { Component, EventEmitter, Input, OnInit, Output, WritableSignal, signal } from '@angular/core';
import { IItem } from '../../interfaces/item.interface';

 interface statusType {
  id: number,
  status: boolean
 }

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent implements OnInit {
  showDropdown: WritableSignal<boolean> = signal(false)
  showTypes: WritableSignal<boolean[]> = signal<boolean[]>([

  ])
  valueSelected: WritableSignal<IItem> = signal({} as IItem)
  @Input() iconDropdown: string
  @Output() valueEmitted: EventEmitter<IItem> = new EventEmitter()
  @Input() defaultValue: number = 1
  @Input() items: IItem[] = [
    { label: 'item 1', id: 1 },
    { label: 'item 2', id: 2 },
    { label: 'item 3', id: 3 },
    { label: 'item 4', id: 4 },
  ]
  options: IItem[]

  ngOnInit(): void {
    this.valueSelected.set(this.items.find(item => item.id == this.defaultValue) || {label: 'item 1', id: 1}) 
    this.valueEmitted.emit(this.valueSelected())
    this.initOptions()
    this.showTypes.set(this.items.map(item => false))
  }

  toggleDropdown() {
    this.showDropdown.update(value => !value)
    this.resetShowTypes()
  }

  toggleTypes(index: number) {
    this.showTypes.update(types => {
      types = types.map(type => false)
      types[index] = !types[index]
      return types
    })
  }

  onSelect(item: IItem) {
    this.valueEmitted.emit(item)
    this.valueSelected.set(item)
    this.showDropdown.set(false)
    this.initOptions()
    this.resetShowTypes()
  }

  private resetShowTypes() {
    this.showTypes.update(types => types.map(type => false))
  }

  private initOptions() {
    this.options = this.items.filter(item => item !== this.valueSelected())
  }
}
