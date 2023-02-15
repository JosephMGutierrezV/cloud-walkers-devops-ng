import { TestBed } from '@angular/core/testing';

import { CloudWalkersDevopsNgService } from './cloud-walkers-devops-ng.service';

describe('CloudWalkersDevopsNgService', () => {
  let service: CloudWalkersDevopsNgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CloudWalkersDevopsNgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
