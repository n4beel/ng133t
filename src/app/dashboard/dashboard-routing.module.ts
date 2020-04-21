import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { OverviewComponent } from './overview/overview.component';

const childRoutes: Routes = [
  {
    path: '',
    component: OverviewComponent,
  },
];

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [...childRoutes],
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class DashboardRoutingModule {}
