import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategItemsComponent } from './categ-items.component';

describe('CategItemsComponent', () => {
  let component: CategItemsComponent;
  let fixture: ComponentFixture<CategItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
