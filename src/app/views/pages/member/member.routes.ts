import { Routes } from "@angular/router";

export const memberRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/list-member/list-member.component').then(m => m.ListMemberComponent)
    },
    {
        path: ':id',
        loadChildren: () => import('./pages/one-member/one-member.routes').then(m => m.oneMemberRoutes)
    }
]