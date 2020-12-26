import { Injectable } from '@angular/core';
import {CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {first, map} from 'rxjs/operators';
import {AdminAuthService} from '../../../store/admin-auth-store/services/admin-auth.service';

@Injectable()
export class AdminAuthGuard implements CanActivate, CanLoad {
  constructor(
    private router: Router,
    private adminAuthService: AdminAuthService
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.getIsAuth();
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.getIsAuth();
  }

  private getIsAuth(): Observable<boolean> {
    return this.adminAuthService.isAuth$.pipe(
      first(),
      map(isAuth => {
        if (!isAuth) {
          this.router.navigateByUrl('/admin/auth/login');
        }

        return isAuth;
      })
    );
  }
}
