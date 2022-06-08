import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('userForm') form!: NgForm;
  token: string = '';

  constructor(private userService: UserService, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.login();
  }

  login(): void {
    if (this.loginVerify()) {
      this.userService.login(this.form.value.username, this.form.value.password)
        .subscribe({
          error: (err) => { 
            //TODO: Handle errors and display for user 
          },
          next: (res) => { 
            let token = res.headers.get('authorization');
            this.localStorageService.set("token", token);
          }
        });
    }
  }

  loginVerify(): boolean {
    const username = this.form.value.username.trim();
    return username.length && this.form.value.password ? true : false;
  }
}
