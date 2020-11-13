import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getPricesMinMax(): Observable<any> {
    return this.http.get('https://demo3474271.mockable.io/pricesProductsMinMax');
  }
  getPricesValues(): Observable<any> {
    return this.http.get('https://demo3474271.mockable.io/pricesProductsValues');
  }
}
