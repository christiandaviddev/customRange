import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeComponent } from './components/range/range.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RangeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RangeComponent
  ],
})
export class SharedModule { }
