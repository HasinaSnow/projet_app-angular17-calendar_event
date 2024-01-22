import { Routes } from "@angular/router";

export const oneMemberRoutes: Routes = [
    {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
    },
    {
        path: 'profile',
        loadComponent: () => import('./pages/profile-member/profile-member.component').then(m =>m.ProfileMemberComponent)
    },
    {
        path: 'tasks',
        loadComponent: () => import('./pages/task-member/task-member.component').then(m =>m.TaskMemberComponent)
    }
]