import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOffersTableComponent } from './job-offers-table.component';

describe('JobOffersTableComponent', () => {
  let component: JobOffersTableComponent;
  let fixture: ComponentFixture<JobOffersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOffersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOffersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
