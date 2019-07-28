import { Injectable } from '@angular/core';
import {AuthService} from '../guards/auth.service';
import { Observable } from 'rxjs';


import { Router,Route, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  implements CanActivate{

  constructor( private _authService:AuthService, private _router:Router) { }


  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const currentUser = this._authService.currentUserValue;
 
    if (currentUser) {
        return true;
     } 

    // navigate to login page
    this._router.navigate(['/login']);
   return false;
  }
}