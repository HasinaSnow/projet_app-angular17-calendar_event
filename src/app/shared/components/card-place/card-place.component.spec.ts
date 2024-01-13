import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlaceComponent } from './card-place.component';

describe('CardPlaceComponent', () => {
  let component: CardPlaceComponent;
  let fixture: ComponentFixture<CardPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPlaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
