import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NormalRangeComponent } from './normal-range.component';

const routes: Routes = [{ path: '', component: NormalRangeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NormalRangeRoutingModule { }
