import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudWalkersDevopsNgComponent } from './cloud-walkers-devops-ng.component';

describe('CloudWalkersDevopsNgComponent', () => {
  let component: CloudWalkersDevopsNgComponent;
  let fixture: ComponentFixture<CloudWalkersDevopsNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudWalkersDevopsNgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudWalkersDevopsNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
