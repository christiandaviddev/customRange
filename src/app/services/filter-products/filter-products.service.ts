import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomParam } from './interfaces/custom-param.interface';

@Injectable({
  providedIn: 'root'
})
export class FilterProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getPricesMinMax(): Observable<CustomParam> {
    return this.http.get<CustomParam>('https://demo3474271.mockable.io/pricesProductsMinMax');
  }
  getPricesValues(): Observable<any> {
    return this.http.get<CustomParam>('https://demo3474271.mockable.io/pricesProductsValues');
  }
}
