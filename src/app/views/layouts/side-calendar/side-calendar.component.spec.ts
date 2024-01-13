import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideCalendarComponent } from './side-calendar.component';

describe('SideCalendarComponent', () => {
  let component: SideCalendarComponent;
  let fixture: ComponentFixture<SideCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
