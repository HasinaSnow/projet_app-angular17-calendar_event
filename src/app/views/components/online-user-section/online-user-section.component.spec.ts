import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineUserSectionComponent } from './online-user-section.component';

describe('OnlineUserSectionComponent', () => {
  let component: OnlineUserSectionComponent;
  let fixture: ComponentFixture<OnlineUserSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineUserSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnlineUserSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
