import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCategComponent } from './card-categ.component';

describe('CardCategComponent', () => {
  let component: CardCategComponent;
  let fixture: ComponentFixture<CardCategComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCategComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardCategComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
