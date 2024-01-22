import { Routes } from "@angular/router";

export const homeRoutes: Routes = [
    {
        path: '', 
        redirectTo: 'overview',
        pathMatch: 'full'
    },
    {
        path: 'overview',
        loadComponent: () => import('./pages/overview/overview.component').then(m => m.OverviewComponent),
    },
    {
        path: 'analytics',
        loadComponent: () => import('./pages/analytic/analytic.component').then(m => m.AnalyticComponent),
    },
    {
        path: 'journal',
        loadComponent: () => import('./pages/journal/journal.component').then(m => m.JournalComponent),
    },
]