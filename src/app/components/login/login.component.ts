import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('userForm') form!: NgForm;
  token: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.login();
  }

  login(): void {
    if (this.loginVerify()) {
      this.userService.login(this.form.value.username, this.form.value.password)
        .subscribe({
          complete: () => { alert("Completed") },
          error: (err) => { alert(err) },
          next: (res) => { alert(res) }
        });
    }
  }

  loginVerify(): boolean {
    const username = this.form.value.username.trim();
    return username.length && this.form.value.password ? true : false;
  }
}
