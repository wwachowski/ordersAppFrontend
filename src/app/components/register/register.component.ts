import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string = '';
  password: string = '';
  passwordRetyped: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  register(): void {
    if (this.registerVerify()) {
      //TODO: perform HTTP requests
    } else { 
      //TODO: display message error 
    }
  }

  registerVerify(): boolean {
    const username = this.username.trim();
    if (username.length && this.password.length) {
      return this.password === this.passwordRetyped;
    } else return false;
  }
}
