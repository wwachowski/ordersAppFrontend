import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/data/models/user';

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
      this.userService.register(this.username, this.password)
        .subscribe({
          complete: () => { alert("Completed") },
          error: (err) => { alert(err) },
          next: (res) => { alert(res) }
        });
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
