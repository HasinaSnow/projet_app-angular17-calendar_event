import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAnalyticComponent } from './card-analytic.component';

describe('CardAnalyticComponent', () => {
  let component: CardAnalyticComponent;
  let fixture: ComponentFixture<CardAnalyticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAnalyticComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardAnalyticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
