import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Subscriber {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.login = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit({value, valid}: {value: LoginComponent, valid}) {
    console.log('VALUE', value);
    console.log('VALID', valid);

    this.reset();
  }

  reset() {
    this.login.reset({
      username: '',
      password: ''
    })
  }
}