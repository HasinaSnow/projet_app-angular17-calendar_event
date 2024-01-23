import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaSectionComponent } from './agenda-section.component';

describe('AgendaSectionComponent', () => {
  let component: AgendaSectionComponent;
  let fixture: ComponentFixture<AgendaSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgendaSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgendaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
