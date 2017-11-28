import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class LoginGuardService implements CanActivate {
  
  currentUrl: string;

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.currentUrl = state.url;
    let currentUser = this.loginService.getCurrentUser();
    let canActivate = currentUser != undefined;
    console.log("user=" + currentUser + " can activate url=" + this.currentUrl + ":" + canActivate);
    if(canActivate){
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

}
