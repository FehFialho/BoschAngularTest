import { TestBed } from '@angular/core/testing';

import { MessagesApi } from './messages.api';

describe('MessagesApi', () => {
  let service: MessagesApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagesApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
