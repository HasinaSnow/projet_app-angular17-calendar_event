import { Component, Input } from '@angular/core';
import { IJournal } from '../../interfaces/journal.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-journal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-journal.component.html',
  styleUrl: './card-journal.component.scss'
})
export class CardJournalComponent {
  @Input({required: true}) journalItem: IJournal
}
