import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchBtnsComponent } from './switch-btns.component';

describe('SwitchBtnsComponent', () => {
  let component: SwitchBtnsComponent;
  let fixture: ComponentFixture<SwitchBtnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchBtnsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
