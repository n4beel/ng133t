import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowMetricsComponent } from './workflow-metrics.component';

describe('WorkflowMetricsComponent', () => {
  let component: WorkflowMetricsComponent;
  let fixture: ComponentFixture<WorkflowMetricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowMetricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
