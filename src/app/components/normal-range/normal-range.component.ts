import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { FilterProductsService } from 'src/app/services/filter-products/filter-products.service';

@Component({
  selector: 'ngc-normal-range',
  templateUrl: './normal-range.component.html',
  styleUrls: ['./normal-range.component.scss']
})
export class NormalRangeComponent implements OnInit {

  minPrice: number;
  maxPrice: number;
  constructor(
    private filterProductsService: FilterProductsService
  ) { }

  ngOnInit(): void {
    this.getPriceValues();
  }

  getPriceValues(): void {
    this.filterProductsService.getPricesMinMax().pipe(
        tap(prices => {
            this.minPrice = prices?.min ?? 0;
            this.maxPrice = prices?.max ?? 0;
        }),
        catchError((err) => of(err))
      ).subscribe();
  }

}
