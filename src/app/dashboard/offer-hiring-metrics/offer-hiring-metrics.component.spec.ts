import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferHiringMetricsComponent } from './offer-hiring-metrics.component';

describe('OfferHiringMetricsComponent', () => {
  let component: OfferHiringMetricsComponent;
  let fixture: ComponentFixture<OfferHiringMetricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferHiringMetricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferHiringMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
