import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FixedValuesRangeRoutingModule } from './fixed-values-range-routing.module';
import { FixedValuesRangeComponent } from './fixed-values-range.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FixedValuesRangeComponent],
  imports: [
    CommonModule,
    FixedValuesRangeRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class FixedValuesRangeModule { }
