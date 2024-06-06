import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private apiUrl = 'http://localhost:8000/api/profiles/'; // עדכן את הכתובת לפי הצורך שלך

  constructor(private http: HttpClient) { }

  getUserProfile(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}${userId}/`);
  }

  updateUserProfile(userId: number, profileData: any): Observable<any> {
    const formData: FormData = new FormData();
    for (const key in profileData) {
      if (profileData[key] instanceof File) {
        formData.append(key, profileData[key]);
      } else {
        formData.append(key, profileData[key] ? profileData[key].toString() : '');
      }
    }
    return this.http.put(`${this.apiUrl}${userId}/`, formData);
  }

  createUserProfile(profileData: any): Observable<any> {
    const formData: FormData = new FormData();
    for (const key in profileData) {
      if (profileData[key] instanceof File) {
        formData.append(key, profileData[key]);
      } else {
        formData.append(key, profileData[key] ? profileData[key].toString() : '');
      }
    }
    return this.http.post(this.apiUrl, formData);
  }
}
