import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { DashboardComponent } from './dashboard.component';
import { StatsBarComponent } from './stats-bar/stats-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { JobOffersTableComponent } from './job-offers-table/job-offers-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InvitationsComponent } from './invitations/invitations.component';
import { WorkflowMetricsComponent } from './workflow-metrics/workflow-metrics.component';
import { OfferHiringMetricsComponent } from './offer-hiring-metrics/offer-hiring-metrics.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    DashboardComponent,
    OverviewComponent,
    StatsBarComponent,
    JobOffersTableComponent,
    InvitationsComponent,
    WorkflowMetricsComponent,
    OfferHiringMetricsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    ChartsModule,
  ],
})
export class DashboardModule {}
