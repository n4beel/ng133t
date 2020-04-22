import { Component, OnInit } from '@angular/core';
import { Label, SingleDataSet, Color } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-workflow-metrics',
  templateUrl: './workflow-metrics.component.html',
  styleUrls: ['./workflow-metrics.component.scss'],
})
export class WorkflowMetricsComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: Label[] = [
    'Screening',
    'Interviewing',
    'Offered',
    'Hired',
  ];
  public doughnutChartData: SingleDataSet = [48, 16, 33, 6];
  public chartColors: Array<any> = [
    {
      // first color
      backgroundColor: ['#6BE1C9', '#CBDD7A', '#E5C06E', '#82D564'],
      borderColor: '#1E1E1E',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)',
    },
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() {}

  ngOnInit() {}
}
