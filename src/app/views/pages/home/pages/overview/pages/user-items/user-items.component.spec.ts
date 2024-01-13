import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserItemsComponent } from './user-items.component';

describe('UserItemsComponent', () => {
  let component: UserItemsComponent;
  let fixture: ComponentFixture<UserItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
