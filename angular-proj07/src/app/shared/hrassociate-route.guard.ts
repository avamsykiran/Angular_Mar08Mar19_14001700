import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'any'
})
export class HrassociateRouteGuard implements CanActivate, CanActivateChild, CanLoad {
 
  constructor(private authService: AuthService, private router: Router) {

  }

  isAllowed(): boolean {

    let allowed = (
      this.authService.isLoggedIn() &&
      this.authService.getCurrentUser().role.toLocaleLowerCase() == "hra");

    if (!allowed) {
      let alternatePlace = "";

      if (!this.authService.isLoggedIn()) {
        alternatePlace = "/login";
      } else {
        alternatePlace = "/admin";
      }

      this.router.navigateByUrl(alternatePlace);
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
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAllowed();
  }
}
