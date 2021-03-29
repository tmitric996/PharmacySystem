import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class GuardServiceService implements CanActivate {

  constructor(public auth: AuthServiceService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem("TOKEN");
    // decode the token to get its payload
    const tokenPayload = localStorage.getItem("AUTHORITIES");
    if (!this.auth.isAuthenticated() || 
    !expectedRole.includes(tokenPayload)) {
      this.router.navigate(['homepage']);
      return false;
    }
    return true;
  }
}
