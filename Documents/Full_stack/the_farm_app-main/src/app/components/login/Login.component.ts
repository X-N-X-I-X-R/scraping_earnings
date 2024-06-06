import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from './login.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  showRegisterForm: boolean = false;

  constructor(private loginService: LoginService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value.username, this.loginForm.value.password)
        .then(response => {
          console.log('Response:', response);  // Log the entire response
          const accessToken = response.data.access; // נשמור את ה-access token
          sessionStorage.setItem('accessToken', accessToken);
          sessionStorage.setItem('refreshToken', response.data.refresh); // נשמור את ה-refresh token
          
          console.log('Access Token:', accessToken,); 
          console.log('Refresh Token:', response.data.refresh); 
          this.router.navigate(['home']);
          this.snackBar.open('Login successful', 'Close', {
            duration: 3000,
          });
        })
        .catch(error => this.handleError(error, 'Login'));
    }
  }

  private handleError(error: any, action: string) {
    console.error(error);
    this.snackBar.open(`${action} failed: ${error.message}`, 'Close', {
      duration: 3000,
    });
  }
}