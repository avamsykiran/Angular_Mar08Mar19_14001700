import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpsComponent } from './emps.component';

const routes: Routes = [{ path: '', component: EmpsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpsRoutingModule { }
