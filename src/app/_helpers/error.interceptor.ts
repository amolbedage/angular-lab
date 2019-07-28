import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthService } from '../guards/auth.service';

@Injectable({  providedIn: 'root'} )
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private AuthService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if ([401, 403,500].indexOf(err.status) !== -1) {
                // auto logout if 401 response returned from api
                this.AuthService.logout();
              //  location.reload(true);
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}