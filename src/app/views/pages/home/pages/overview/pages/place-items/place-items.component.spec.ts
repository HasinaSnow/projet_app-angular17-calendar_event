import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceItemsComponent } from './place-items.component';

describe('PlaceItemsComponent', () => {
  let component: PlaceItemsComponent;
  let fixture: ComponentFixture<PlaceItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaceItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
