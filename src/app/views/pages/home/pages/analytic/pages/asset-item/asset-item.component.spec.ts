import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetItemComponent } from './asset-item.component';

describe('AssetItemComponent', () => {
  let component: AssetItemComponent;
  let fixture: ComponentFixture<AssetItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssetItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
