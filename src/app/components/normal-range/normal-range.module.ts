import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NormalRangeRoutingModule } from './normal-range-routing.module';
import { NormalRangeComponent } from './normal-range.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [NormalRangeComponent],
  imports: [
    CommonModule,
    NormalRangeRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class NormalRangeModule { }
