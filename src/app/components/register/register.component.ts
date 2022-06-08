import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('userForm') form!: NgForm;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.register();
  }

  register(): void {
    if (this.registerVerify()) {
      this.userService.register(this.form.value.username, this.form.value.password)
        .subscribe({
          error: (err) => {
            //TODO: Handle errors and display for user 
          },
          next: (isCreated: boolean) => {
            isCreated ? alert("User registered") : alert("User already exists");
          }
        });
    }
  }

  registerVerify(): boolean {
    const username = this.form.value.username.trim();
    if (username.length && this.form.value.password) {
      return this.form.value.password === this.form.value.passwordRetyped;
    } else return false;
  }
}
