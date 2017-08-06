import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  user: User;
  constructor(
    private router: Router
  ) { }
  ngOnInit() {
    this.user = new User('admin', 'admin');
  }

  login(): void {
    this.router.navigate(['/dashboard']);
  }
}
