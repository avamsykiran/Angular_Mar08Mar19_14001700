import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpsFormComponent } from './emps-form/emps-form.component';
import { EmpsListComponent } from './emps-list/emps-list.component';

import { EmpsComponent } from './emps.component';

const routes: Routes = [
  { path: '', component: EmpsComponent,children:[
    {path:'',pathMatch:'full',redirectTo:"list"},
    {path:'list',component:EmpsListComponent},
    {path:'add',component:EmpsFormComponent},
    {path:'edit/:id',component:EmpsFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpsRoutingModule { }
