import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeptsComponent } from './depts/depts.component';
import { EmpFormComponent } from './emp-form/emp-form.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpsComponent } from './emps/emps.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {path:'emps',component:EmpsComponent,children:[
    {path:'',pathMatch:'full',redirectTo:'list'},
    {path:'list',component:EmpListComponent},
    {path:'add',component:EmpFormComponent},
    {path:'edit/:id',component:EmpFormComponent}
  ]},
  {path:'depts',component:DeptsComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
