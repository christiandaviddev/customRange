import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FixedValuesRangeRoutingModule } from './fixed-values-range-routing.module';
import { FixedValuesRangeComponent } from './fixed-values-range.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [FixedValuesRangeComponent],
  imports: [
    CommonModule,
    FixedValuesRangeRoutingModule,
    SharedModule
  ]
})
export class FixedValuesRangeModule { }
