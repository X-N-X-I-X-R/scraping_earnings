import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateFn, CanActivateChildFn } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  private loggedIn = false;

  constructor(private http: HttpClient) {}

  canActivate: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) => {
    const router = inject(Router);

    if (!sessionStorage.getItem('userToken')) {
      return router.createUrlTree(['/login']);
    }
    return true;
  }

  canActivateChild: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => this.canActivate(route, state);

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  login(username: string, password: string): Observable<{token: string}> {
    return this.http.post<{token: string}>('http://127.0.0.1:8000/login', {username, password})
      .pipe(tap(({token}) => {
        sessionStorage.setItem('userToken', token);
        this.loggedIn = true;
      }));
  }

  logout(): void {
    sessionStorage.removeItem('userToken');
    this.loggedIn = false;
  }
}





/// The AuthGuard service is responsible for protecting routes and checking if a user is authenticated. It's used by the Angular router to decide if a route can be activated.



/// The LoginService is responsible for making HTTP requests related to authentication, such as login and register. It interacts with your backend API.