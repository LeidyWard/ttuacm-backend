import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ContactPosts, FakeMessage } from '../mocks/contact-posts.mock';

import { ContactService } from './contact.service';

describe('ContactService', () => {
  let service: ContactService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContactService]
    });

    service = TestBed.get(ContactService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('Contact Service should instatiate', () => {
    expect(service).toBeTruthy();
  });

  it('#sendEmail should be called and use POST', () => {
    let post: ContactPosts = FakeMessage;
    service.sendEmail(post).subscribe(data => {
      expect(data).not.toThrowError();
    });

    const request = httpMock.expectOne(service.ContactUsURL);

    expect(request.request.method).toBe('POST');
  });
});
