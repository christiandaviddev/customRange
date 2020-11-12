import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FixedValuesRangeComponent } from './fixed-values-range.component';

const routes: Routes = [{ path: '', component: FixedValuesRangeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FixedValuesRangeRoutingModule { }
