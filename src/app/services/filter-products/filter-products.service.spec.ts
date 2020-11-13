import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { FilterProductsService } from './filter-products.service';

describe('FilterProductsService', () => {
  let service: FilterProductsService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        FilterProductsService
      ]
    });
    injector = getTestBed();
    service = TestBed.inject(FilterProductsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach (() => {
    httpMock.verify();
  });

  describe('#getPricesMinMax', () => {
    it('should be GET method', () => {
      service.getPricesMinMax().subscribe();
      const req: TestRequest = httpMock.expectOne('https://demo3474271.mockable.io/pricesProductsMinMax');
      expect(req.request.method).toBe('GET');
      req.flush([]);
    });
  });
  describe('#getPricesValues', () => {
    it('should be GET method', () => {
      service.getPricesValues().subscribe();
      const req: TestRequest = httpMock.expectOne('https://demo3474271.mockable.io/pricesProductsValues');
      expect(req.request.method).toBe('GET');
      req.flush([]);
    });
  });
});
