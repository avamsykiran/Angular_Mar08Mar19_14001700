import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './auth/create-user/create-user.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }, 
  { path: 'hra', loadChildren: () => import('./hrassociate/hrassociate.module').then(m => m.HrassociateModule) },
  { path: 'login', component:LoginComponent},
  { path: 'register', component:CreateUserComponent},
  { path:'',pathMatch:'full',redirectTo:"login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
