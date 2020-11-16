import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NormalRangeRoutingModule } from './normal-range-routing.module';
import { NormalRangeComponent } from './normal-range.component';

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
