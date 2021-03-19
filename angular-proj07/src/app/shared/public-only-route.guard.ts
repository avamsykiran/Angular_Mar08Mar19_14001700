import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'any'
})
export class PublicOnlyRouteGuard implements CanActivate, CanActivateChild {
 
  constructor(private authService:AuthService,private router:Router){

  }

  isAllowed() : boolean{
    
    let allowed = !this.authService.isLoggedIn();

    if(!allowed){
      let redirectPath = "";

      let usr = this.authService.getCurrentUser();

      if(usr.role.toLocaleLowerCase()=="admin"){
        redirectPath="/admin";
      }else{
        redirectPath="/hra";
      }

      this.router.navigateByUrl(redirectPath);
    }

    return allowed;
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.isAllowed();
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.isAllowed();
  }
  
}
