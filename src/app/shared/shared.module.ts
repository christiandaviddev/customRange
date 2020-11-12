import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeComponent } from './components/range/range.component';



@NgModule({
  declarations: [
    RangeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RangeComponent
  ],
})
export class SharedModule { }
