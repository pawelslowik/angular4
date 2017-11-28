import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from './services/login.service';
import { CurrentUser } from './classes/current-user';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'AddressBookApp';
  currentUser: CurrentUser;
  private subscription: Subscription;

  constructor(private loginService: LoginService){}

  ngOnInit() {
    this.currentUser = this.loginService.getCurrentUser();
    this.subscription = this.loginService.observeCurrentUser().subscribe(currentUser => this.currentUser = currentUser);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
