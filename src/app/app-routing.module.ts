import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'exercise1',
    loadChildren: () =>
      import('./components/normal-range/normal-range.module').then(
        (m) => m.NormalRangeModule
      ),
  },
  {
    path: 'exercise2',
    loadChildren: () =>
      import('./components/fixed-values-range/fixed-values-range.module').then(
        (m) => m.FixedValuesRangeModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
