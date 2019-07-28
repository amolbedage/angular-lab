import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../guards/auth.service';

@Injectable({providedIn:'root'})
export class JwtInterceptor implements HttpInterceptor {
    constructor(private AuthService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = this.AuthService.currentUserValue;
        console.log(currentUser);
        if (currentUser && currentUser) {
                request = request.clone({
                setHeaders: {   
                    Authorization: `${currentUser.token}`
                }
            });
        }

        return next.handle(request);
    }
}

//sudo ng g i _helpers/jwt.interceptor