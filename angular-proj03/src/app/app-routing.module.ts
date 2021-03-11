import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'',pathMatch:'full',redirectTo:'dashboard'},
  { path: 'emps', loadChildren: () => import('./emps/emps.module').then(m => m.EmpsModule) }, 
  { path: 'depts', loadChildren: () => import('./depts/depts.module').then(m => m.DeptsModule) }, 
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
