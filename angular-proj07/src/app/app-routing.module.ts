import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './auth/create-user/create-user.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminRouteGuard } from './shared/admin-route.guard';
import { HrassociateRouteGuard } from './shared/hrassociate-route.guard';
import { PublicOnlyRouteGuard } from './shared/public-only-route.guard';

const routes: Routes = [
  { path: 'admin',
  canActivate:[AdminRouteGuard],
  canLoad:[AdminRouteGuard],
  canActivateChild:[AdminRouteGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }, 
  { path: 'hra', 
    canActivate:[HrassociateRouteGuard],
    canLoad:[HrassociateRouteGuard],
    canActivateChild:[HrassociateRouteGuard],
    loadChildren: () => import('./hrassociate/hrassociate.module').then(m => m.HrassociateModule) },
  { path: 'login', 
    canActivate:[PublicOnlyRouteGuard],
    component:LoginComponent},
  { path: 'register', 
    canActivate:[PublicOnlyRouteGuard],
    component:CreateUserComponent},
  { path:'',pathMatch:'full',redirectTo:"login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
