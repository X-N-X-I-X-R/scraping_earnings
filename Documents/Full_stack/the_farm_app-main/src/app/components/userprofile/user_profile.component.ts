import { Component, OnInit } from '@angular/core';
import { UserProfileService } from './user_profile.service';
import { ActivatedRoute } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user_profile.component.html',
  styleUrls: ['../../app.component.css']  
})
export class UserProfileComponent implements OnInit {
  profile: any = {};
  userId!: number;
  username: string = '';
  error: any;
  currentPage: string = 'home-section';
  countries = [
    { code: 'IL', name: 'Israel' },
    { code: 'USA', name: 'United States' }
  ];

  profileSaved = false;

  constructor(
    public userProfileService: UserProfileService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.decodeToken();
    if (!isNaN(this.userId)) {
      this.userProfileService.getUserProfile(this.userId).subscribe({
        next: (data) => {
          this.profile = data;
          this.profileSaved = true;  // Update this flag when the profile is fetched successfully
        },
        error: (error) => {
          let errorMessage = 'Unknown error';
          console.error('Full error:', error);
          if (error instanceof Error) {
            errorMessage = error.message;
          } else if (typeof error === 'string') {
            errorMessage = error;
          } else if (error.error && error.error.message) {
            errorMessage = error.error.message;
          }
          console.error('Error fetching user profile:', errorMessage);
          this.snackBar.open('Error fetching user profile: ' + errorMessage, 'Close', {
            duration: 3000,
          });
        }
      });
    } else {
      console.error('Invalid user ID');
      this.snackBar.open('Invalid user ID', 'Close', {
        duration: 3000,
      });
    }
  }

  decodeToken(): void {
    const token = sessionStorage.getItem('accessToken');
    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        this.username = decoded.username;
        this.userId = decoded.user_id;
        console.log('Decoded username:', this.username);
        console.log('Decoded user ID:', this.userId);
      } catch (error) {
        let errorMessage = 'Unknown error';
        if (error instanceof Error) {
          errorMessage = error.message;
        } else if (typeof error === 'string') {
          errorMessage = error;
        }
        console.error('Error decoding token:', errorMessage);
        this.snackBar.open('Error decoding token: ' + errorMessage, 'Close', {
          duration: 3000,
        });
      }
    } else {
      console.error('Token not found');
      this.snackBar.open('Token not found', 'Close', {
        duration: 3000,
      });
    }
  }

  navigateTo(page: string): void {
    this.currentPage = page;
    document.querySelectorAll('.l-section').forEach((section) => {
      section.classList.remove('section--is-active');
    });
    document.getElementById(page)?.classList.add('section--is-active');
  }

  saveProfile(): void {
    if (!isNaN(this.userId)) {
      this.userProfileService.updateUserProfile(this.userId, this.profile).subscribe({
        next: (response) => {
          console.log('Profile updated successfully', response);
          this.snackBar.open('Profile updated successfully', 'Close', {
            duration: 3000,
          });
          this.profileSaved = true;  // Update this flag when the profile is saved successfully
        },
        error: (error) => {
          let errorMessage = 'Unknown error';
          if (error instanceof Error) {
            errorMessage = error.message;
          } else if (typeof error === 'string') {
            errorMessage = error;
          }
          console.error('Error updating profile:', errorMessage);
          this.snackBar.open('Error updating profile: ' + errorMessage, 'Close', {
            duration: 3000,
          });
        }
      });
    } else {
      console.error('Invalid user ID');
      this.snackBar.open('Invalid user ID', 'Close', {
        duration: 3000,
      });
    }
  }

  onFileChange(event: any, field: string): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.profile[field] = file;
    }
  }

  getProfileImageUrl(): string {
    return `http://localhost:8000${this.profile.user_profile_image}`;
  }
}
