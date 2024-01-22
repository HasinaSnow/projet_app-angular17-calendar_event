import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardJournalComponent } from './card-journal.component';

describe('CardJournalComponent', () => {
  let component: CardJournalComponent;
  let fixture: ComponentFixture<CardJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardJournalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
