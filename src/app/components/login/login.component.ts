import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  login(): void {
    if (this.loginVerify()) {
      //TODO: perform HTTP requests
    } else { 
      //TODO: display message error 
    }
  }

  loginVerify(): boolean {
    const username = this.username.trim();
    return username.length && this.password.length ? true : false;
  }
}
