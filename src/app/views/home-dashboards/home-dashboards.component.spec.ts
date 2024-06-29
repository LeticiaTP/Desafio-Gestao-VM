import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDashboardsComponent } from './home-dashboards.component';

describe('HomeDashboardsComponent', () => {
  let component: HomeDashboardsComponent;
  let fixture: ComponentFixture<HomeDashboardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDashboardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeDashboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
