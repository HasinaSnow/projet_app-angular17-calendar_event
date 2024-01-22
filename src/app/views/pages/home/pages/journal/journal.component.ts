import { CommonModule } from '@angular/common';
import { Component, WritableSignal, inject } from '@angular/core';
import { DropdownComponent } from '../../../../../shared/components/dropdown/dropdown.component';
import { IItem } from '../../../../../shared/interfaces/item.interface';
import { JournalService } from '../../../../../shared/services/journal.service';
import { CardJournalComponent } from '../../../../../shared/components/card-journal/card-journal.component';
import { IJournal } from '../../../../../shared/interfaces/journal.interface';

@Component({
  selector: 'app-journal',
  standalone: true,
  imports: [
    CommonModule,
    DropdownComponent,
    CardJournalComponent
  ],
  templateUrl: './journal.component.html',
  styleUrl: './journal.component.scss'
})
export class JournalComponent {
  private journalService = inject(JournalService)

  flowFilterItems: IItem[] = this.journalService.flowFilter
  actionFilterItems: IItem[] = this.journalService.actionFilter
  dateFilterItems: IItem[] = this.journalService.dateFilter

  journals: WritableSignal<IJournal[]> = this.journalService.journalItems
  
  onFilterValue(item: IItem): void {
    this.journalService.changeFilter(item)
  }
}
