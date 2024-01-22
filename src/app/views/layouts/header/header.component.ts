import { Component, WritableSignal, inject, signal } from '@angular/core';
import { INavItem } from '../../../shared/interfaces/nav-item.interface';
import { HeaderService } from '../../../shared/services/header.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { INotifItem } from '../../../shared/interfaces/notif-item.interface';
import { ItaskItem } from '../../../shared/interfaces/task.interface';
import { TaskService } from '../../../shared/services/task.service';
import { IMyProfile } from '../../../shared/interfaces/user.interface';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private headerService = inject(HeaderService)
  addBtnItems: INavItem[] = this.headerService.addBtnItems
  notifsItems: WritableSignal<INotifItem[]> = this.headerService.notifItems
  tasksItems: WritableSignal<ItaskItem[]> = inject(TaskService).taskItems
  myProfile: WritableSignal<IMyProfile> = inject(UserService).myProfile
  isDarkTheme: WritableSignal<boolean> = signal(false)

  goToProfileView() {
    console.log('go to profile view')
  }

  goToMyProfilePage() {
    console.log('go to my profile page')
  }

  goToSettingsPage() {
    console.log('go to settings page')
  }

  goToRuleView(idRule: number) {
    console.log('go to rule view')
  }

  gotoUserView(idUser: number) {
    console.log('go to user view')
  }

  goToServiceView(idService: number) {
    console.log('go to service view')
  }

  goToEventView(idEvent: number) {
    console.log('go to event view')
  }

  goToClientView(idClient: number) {
    console.log('go to client view')
  }

  goToTaskView(idTask: number) {
    console.log('got to task view')
  }

  onSignOut() {
    console.log('on sign out')
  }
}
