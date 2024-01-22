import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./views/pages/home/home.component').then(m => m.HomeComponent),
        loadChildren: () => import('./views/pages/home/home.routes').then(m => m.homeRoutes)
    },
    {
        path: 'members',
        loadComponent: () => import('./views/pages/member/member.component').then(m => m.MemberComponent),
        loadChildren: () => import('./views/pages/member/member.routes').then(m => m.memberRoutes)
    },
    {
        path: 'settings',
        loadComponent: () => import('./views/pages/setting/setting.component').then(m => m.SettingComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./views/pages/about/about.component').then(m => m.AboutComponent)
    }
];
