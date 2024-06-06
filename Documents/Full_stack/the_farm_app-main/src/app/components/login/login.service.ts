import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root' // This service is provided in the root injector
})
export class LoginService {
  private apiUrl = 'http://127.0.0.1:8000/'; // API URL

  constructor() { }

// Method to login a user
async login(username: string, password: string) {
  if (!username || !password) {
    throw new Error('Username and password are required');
  }

  console.log(`Attempting to login user: ${username}`);
  try {
    // Make a POST request to the login endpoint
    const response = await axios.post(this.apiUrl + 'login/', {
      username,
      password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response;
  } catch (error) {
    // Log any errors that occur during the request
    console.error('Error logging in:', error);
    throw error;
  }
}

async register(username: string, password: string, email: string) {
  console.log('register method called'); 
  if (!username || !password || !email) {
    throw new Error('Username, password, and email are required');
  }

  console.log(`Attempting to register user: ${username}`);
  try {
    const url = this.apiUrl + 'api/register_user/';
    const data = { username, password, email };
    console.log('Request URL:', url);
    console.log('Request data:', data);

    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('Registration response:', response);
    return response;
  } catch (error) {
    throw error;
  }
}
  // Method to logout a user
  // Method to logout a user
async logout(refreshToken: string) {
  console.log('Attempting to logout');
  try {
    // Make a POST request to the logout endpoint
    const response = await axios.post(this.apiUrl + 'logout', {
      refresh_token: refreshToken
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    sessionStorage.removeItem('userToken');
    sessionStorage.removeItem('accessToken');
    return response;
  } catch (error) {
    // Log any errors that occur during the request
    console.error('Error logging out:', error);
    throw error;
  }
}
}





