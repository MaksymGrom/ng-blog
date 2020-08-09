import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AdminAuthService} from '../services/admin-auth.service';

@Injectable()
export class AdminAuthInterceptor implements HttpInterceptor {

  constructor(private adminAuthService: AdminAuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // проверить наличие токена
    if (this.adminAuthService.accessToken) {
      // Если токен есть, то добавить заголовок `Bearer token`
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.adminAuthService.accessToken}`
        }
      });
    }

    return next.handle(request);
  }
}
