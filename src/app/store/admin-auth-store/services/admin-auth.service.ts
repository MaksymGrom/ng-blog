import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
import {select, Store} from '@ngrx/store';
import {getAccessToken} from '../store/admin-auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  accessToken?: string;

  constructor(
    private httpClient: HttpClient,
    private jwtHelperService: JwtHelperService,
    private store$: Store
  ) {
    this.store$.pipe(select(getAccessToken))
      .subscribe(accessToken => this.accessToken = accessToken);
  }

  login(body: {login: string, password: string}) {
    return this.httpClient.post<{accessToken: string}>(
      'http://localhost:3000/auth/login',
      body
    ).pipe(
      map(res => ({
        ...res,
        ...this.jwtHelperService.decodeToken(res.accessToken)
      }))
    );
  }
}
