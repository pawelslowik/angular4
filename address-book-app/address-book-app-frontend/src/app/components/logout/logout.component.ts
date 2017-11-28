import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  onLogout(): void {
    this.loginService.removeCurrentUser();
    this.router.navigateByUrl("/address-list");
  }

  onLogoutCanceled(): void {
    this.router.navigateByUrl("/");
  }

}
