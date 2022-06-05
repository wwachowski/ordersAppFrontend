import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string = '';
  password: string = '';
  passwordRetyped: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  registerVerify(): void {
    window.alert('It works!');
  }
}
