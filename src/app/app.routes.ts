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
        children: [
            {
                path: '', 
                redirectTo: 'overview',
                pathMatch: 'full'
            },
            {
                path: 'overview',
                loadComponent: () => import('./views/pages/home/pages/overview/overview.component').then(m => m.OverviewComponent),
            },
            {
                path: 'analytics',
                loadComponent: () => import('./views/pages/home/pages/analytic/analytic.component').then(m => m.AnalyticComponent),
            },
            {
                path: 'journal',
                loadComponent: () => import('./views/pages/home/pages/journal/journal.component').then(m => m.JournalComponent),
            },
        ],
    },
    {
        path: 'members',
        loadComponent: () => import('./views/pages/member/member.component').then(m => m.MemberComponent)
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
