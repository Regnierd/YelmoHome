import { TestBed } from '@angular/core/testing';

import { ConnectionServerService } from './connection-server.service';

describe('ConnectionServerService', () => {
  let service: ConnectionServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectionServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
