import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { DeptsComponent } from './depts/depts.component';

const routes: Routes = [
  { path: '', component: AdminComponent,children:[
    { path: 'depts', component: DeptsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
