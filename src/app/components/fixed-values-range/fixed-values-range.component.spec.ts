import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { FilterProductsService } from 'src/app/services/filter-products/filter-products.service';
import { FixedValuesRangeComponent } from './fixed-values-range.component';

describe('FixedValuesRangeComponent', () => {
  let component: FixedValuesRangeComponent;
  let fixture: ComponentFixture<FixedValuesRangeComponent>;
  let filterProductsService: FilterProductsService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedValuesRangeComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedValuesRangeComponent);
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
      spyOn<any>(filterProductsService, 'getPricesValues').and.returnValue(of({values: [1, 2, 3]}));
      component.values = [];
      component.ngOnInit();
      expect(component.values).toEqual([1, 2, 3]);
    });
  });
});
