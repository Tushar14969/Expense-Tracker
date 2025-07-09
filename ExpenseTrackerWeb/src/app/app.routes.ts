import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { SummaryComponent } from './components/summary/summary.component';
import { ChartsComponent } from './components/charts/charts.component';

export const routes: Routes = [
    {
        path:"dashboard",
        component:DashboardComponent
    },
    {
        path:"expenses",
        component:ExpenseListComponent
    },
    {
        path:"summary",
        component:SummaryComponent
    },
    {
        path:"chart",
        component:ChartsComponent
    }
];
