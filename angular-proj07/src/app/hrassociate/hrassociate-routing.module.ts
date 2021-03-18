import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HrassociateComponent } from './hrassociate.component';

const routes: Routes = [{ path: '', component: HrassociateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrassociateRoutingModule { }
