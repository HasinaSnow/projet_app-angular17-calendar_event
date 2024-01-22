import { Component, WritableSignal, inject } from '@angular/core';
import { IUserDetail } from '../../../../../../../shared/interfaces/user.interface';
import { UserService } from '../../../../../../../shared/services/user.service';

@Component({
  selector: 'app-profile-member',
  standalone: true,
  imports: [],
  templateUrl: './profile-member.component.html',
  styleUrl: './profile-member.component.scss'
})
export class ProfileMemberComponent {
  profile: WritableSignal<IUserDetail> = inject(UserService).userDetail
}
