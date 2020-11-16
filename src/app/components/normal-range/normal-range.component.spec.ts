import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { FilterProductsService } from 'src/app/services/filter-products/filter-products.service';
import { NormalRangeComponent } from './normal-range.component';

describe('NormalRangeComponent', () => {
  let component: NormalRangeComponent;
  let fixture: ComponentFixture<NormalRangeComponent>;
  let filterProductsService: FilterProductsService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalRangeComponent ],
        imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    filterProductsService = TestBed.inject(FilterProductsService);
  });

  describe(('#ngOnInit'), () => {
    it('call getPriceValues' , () => {
      spyOn<any>(component, 'getPriceValues');
      component.ngOnInit();
      expect(component['getPriceValues']).toHaveBeenCalled();
    });
  });
  describe(('#getPriceValues'), () => {
    it('call getPricesMinMax' , () => {
      spyOn<any>(filterProductsService, 'getPricesMinMax').and.returnValue(of({ min: 1, max: 100}));
      component.minPrice = 0;
      component.maxPrice = 0;
      component.ngOnInit();
      expect(component.minPrice).toEqual(1);
      expect(component.maxPrice).toEqual(100);
    });
  });
});
