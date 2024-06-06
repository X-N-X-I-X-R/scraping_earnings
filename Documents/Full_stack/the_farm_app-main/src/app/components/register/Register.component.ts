import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router, private snackBar: MatSnackBar) { 
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  ngOnInit() {}

  register() {
    const username = this.registerForm.value.username;
    const password = this.registerForm.value.password;
    const email = this.registerForm.value.email;

    if (this.registerForm.valid && username && password && email) {
      this.loginService.register(username, password, email)
        .then(response => {
          console.log('Registration successful, response:', response);
          
        })
        .catch(error => this.handleError(error, 'Registration'));
    }
  }

  private handleError(error: any, action: string) {
    console.error(error);
    this.snackBar.open(`${action} failed: ${error.message}`, 'Close', {
      duration: 3000,
    });
  }
}