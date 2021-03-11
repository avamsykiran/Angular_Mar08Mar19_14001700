import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeptsComponent } from './depts.component';

const routes: Routes = [{ path: '', component: DeptsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeptsRoutingModule { }
