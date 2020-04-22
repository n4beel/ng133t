import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-job-offers-table',
  templateUrl: './job-offers-table.component.html',
  styleUrls: ['./job-offers-table.component.scss'],
})
export class JobOffersTableComponent implements OnInit {
  displayedColumns: string[] = [
    'role',
    'views',
    'applied',
    'screening',
    'interviewing',
    'offered',
    'hired',
    'rejected',
  ];
  dataSource = new MatTableDataSource<JobElement>(JOB_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface JobElement {
  role: string;
  views: number;
  applied: number;
  screening: number;
  interviewing: number;
  offered: number;
  hired: number;
  rejected: number;
}

const JOB_DATA: JobElement[] = [
  {
    role: 'Hydrogen',
    views: 123,
    screening: 123,
    interviewing: 123,
    offered: 123,
    hired: 123,
    applied: 123,
    rejected: 123,
  },
  {
    role: 'Helium',
    views: 123,
    screening: 123,
    interviewing: 123,
    offered: 123,
    hired: 123,
    applied: 123,
    rejected: 123,
  },
  {
    role: 'Lithium',
    views: 123,
    screening: 123,
    interviewing: 123,
    offered: 123,
    hired: 123,
    applied: 123,
    rejected: 123,
  },
  {
    role: 'Beryllium',
    views: 123,
    screening: 123,
    interviewing: 123,
    offered: 123,
    hired: 123,
    applied: 123,
    rejected: 123,
  },
  {
    role: 'Boron',
    views: 123,
    screening: 123,
    interviewing: 123,
    offered: 123,
    hired: 123,
    applied: 123,
    rejected: 123,
  },
  {
    role: 'Carbon',
    views: 123,
    screening: 123,
    interviewing: 123,
    offered: 123,
    hired: 123,
    applied: 123,
    rejected: 123,
  },
  {
    role: 'Nitrogen',
    views: 123,
    screening: 123,
    interviewing: 123,
    offered: 123,
    hired: 123,
    applied: 123,
    rejected: 123,
  },
  {
    role: 'Oxygen',
    views: 123,
    screening: 123,
    interviewing: 123,
    offered: 123,
    hired: 123,
    applied: 123,
    rejected: 123,
  },
  {
    role: 'Fluorine',
    views: 123,
    screening: 123,
    interviewing: 123,
    offered: 123,
    hired: 123,
    applied: 123,
    rejected: 123,
  },
  {
    role: 'Neon',
    views: 123,
    screening: 123,
    interviewing: 123,
    offered: 123,
    hired: 123,
    applied: 123,
    rejected: 123,
  },
  {
    role: 'Sodium',
    views: 123,
    screening: 123,
    interviewing: 123,
    offered: 123,
    hired: 123,
    applied: 123,
    rejected: 123,
  },
  {
    role: 'Magnesium',
    views: 123,
    screening: 123,
    interviewing: 123,
    offered: 123,
    hired: 123,
    applied: 123,
    rejected: 123,
  },
  {
    role: 'Aluminum',
    views: 123,
    screening: 123,
    interviewing: 123,
    offered: 123,
    hired: 123,
    applied: 123,
    rejected: 123,
  },
  {
    role: 'Silicon',
    views: 123,
    screening: 123,
    interviewing: 123,
    offered: 123,
    hired: 123,
    applied: 123,
    rejected: 123,
  },
  {
    role: 'Phosphorus',
    views: 123,
    screening: 123,
    interviewing: 123,
    offered: 123,
    hired: 123,
    applied: 123,
    rejected: 123,
  },
  {
    role: 'Sulfur',
    views: 123,
    screening: 123,
    interviewing: 123,
    offered: 123,
    hired: 123,
    applied: 123,
    rejected: 123,
  },
  {
    role: 'Chlorine',
    views: 123,
    screening: 123,
    interviewing: 123,
    offered: 123,
    hired: 123,
    applied: 123,
    rejected: 123,
  },
  {
    role: 'Argon',
    views: 123,
    screening: 123,
    interviewing: 123,
    offered: 123,
    hired: 123,
    applied: 123,
    rejected: 123,
  },
  {
    role: 'Potassium',
    views: 123,
    screening: 123,
    interviewing: 123,
    offered: 123,
    hired: 123,
    applied: 123,
    rejected: 123,
  },
  {
    role: 'Calcium',
    views: 123,
    screening: 123,
    interviewing: 123,
    offered: 123,
    hired: 123,
    applied: 123,
    rejected: 123,
  },
];
