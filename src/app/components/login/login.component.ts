import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from 'src/app/data/models/user';

import { UserService } from 'src/app/services/user.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('userForm') public form!: NgForm;
  private user?: User;

  constructor(
    private userService: UserService, 
    private localStorageService: LocalStorageService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.login();
  }

  private login(): void {
    if (this.loginVerify()) {
      this.userService.login(this.form.value.username, this.form.value.password)
        .subscribe({
          error: (err) => { 
            //TODO: Handle errors and display for user 
          },
          next: (res) => { 
            const token: string = res.headers.get('authorization');
            this.user = {id: 0, username: this.form.value.username, token: token};
            console.log(res);
            this.localStorageService.setObj('user', this.user);
            this.router.navigate(['/home']);
          }
        });
    }
  }

  private loginVerify(): boolean {
    const username = this.form.value.username.trim();
    return username.length && this.form.value.password ? true : false;
  }
}
