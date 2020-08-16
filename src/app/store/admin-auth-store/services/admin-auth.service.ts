import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Observable} from 'rxjs';
import {AuthData} from '../store/admin-auth.reducer';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  constructor(
    private httpClient: HttpClient,
    private jwtHelperService: JwtHelperService
  ) { }

  login(body: {login: string, password: string}): Observable<AuthData> {
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

  refresh(): Observable<AuthData> {
    return this.httpClient.post<{accessToken: string}>(
      'http://localhost:3000/auth/refresh',
      {}
    ).pipe(
      map(res => ({
        ...res,
        ...this.jwtHelperService.decodeToken(res.accessToken)
      }))
    );
  }
}
