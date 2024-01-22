import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMemberComponent } from './profile-member.component';

describe('ProfileMemberComponent', () => {
  let component: ProfileMemberComponent;
  let fixture: ComponentFixture<ProfileMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileMemberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
