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
  token: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  login(): void {
    if (this.loginVerify()) {
      this.userService.login(this.username, this.password)
        .subscribe({
          complete: () => { alert("Completed") },
          error: (err) => { alert(err) },
          next: res => { alert(res); JSON.stringify(res); }
        });
    } else {
      //TODO: display message error 
    }
  }

  loginVerify(): boolean {
    const username = this.username.trim();
    return username.length && this.password.length ? true : false;
  }
}
