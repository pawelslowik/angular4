import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { LoginGuardService } from '../../services/login-guard.service';
import { CurrentUser } from '../../classes/current-user';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private loginService: LoginService,
    private router: Router, private loginGuardService: LoginGuardService) { }

  ngOnInit() {
    if(this.loginService.getCurrentUser()){
      this.router.navigate(['address-list']);
    }
  }

  onLogin(): void {
    this.loginService.login(this.username, this.password)
      .subscribe(response => {
        let authHeader: string = response.headers.get("Authorization");
        if(authHeader){
          let token: string = authHeader.replace("Bearer", "").replace(" ", "");
          if(token){
            this.loginService.setCurrentUser(new CurrentUser(this.username, token));
            if (this.loginGuardService.currentUrl) {
              this.router.navigateByUrl(this.loginGuardService.currentUrl);
            }
            else {
              this.router.navigate(['address-list']);
            }
            return;
          }
        }
        this.error = "Login failed";
      }, 
    error => {
      this.error = "Login failed with error=" + error;
    });
  }
}
