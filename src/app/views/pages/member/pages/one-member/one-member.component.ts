import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderService } from '../../../../../shared/services/header.service';

@Component({
  selector: 'app-one-member',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './one-member.component.html',
  styleUrl: './one-member.component.scss'
})
export class OneMemberComponent implements OnInit {
  private headerService = inject(HeaderService)

  ngOnInit(): void {
    this.headerService.headerNavItem.set([
      {
        label: 'Detail',
        icon: 'quick_reference',
        url: '/home/overview'
      },
      {
        label: 'Tasks',
        icon: 'task',
        url: '/home/analytics'
      }
    ])

    console.log(this.headerService.headerNavItem())
  }
}
