import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private loginService: LoginService, private snackBar: MatSnackBar) { }

  logout() {
    const refreshToken = sessionStorage.getItem('refreshToken');
    if (refreshToken) {
      this.loginService.logout(refreshToken).then(() => {
        console.log('Logged out');
        this.snackBar.open('Logged out', 'Close', {
          duration: 3000,
        });
      }).catch((error) => {
        console.error('Error logging out:', error);
        this.snackBar.open('Error logging out: ' + error.message, 'Close', {
          duration: 3000,
        });
      });
    } else {
      console.error('No refresh token found');
      this.snackBar.open('You are not Connected', 'Close', {
        duration: 3000,
      });
      // Handle the case when there's no refresh token
    }
  }
}