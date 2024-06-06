import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { EarningsComponent } from './components/Earnings/Earnings.component';
import { AppComponent } from './app.component';
// import { WatchlistComponent } from './components/Watchlist/Watchlist.component';
import { LoginComponent } from './components/login/Login.component';
import { AuthGuard } from './auth.guard.service';
import { RegisterComponent } from './components/register/Register.component';
import { StockPatentsComponent } from './components/detail-stock/stock-patents.component';
import { UserProfileComponent } from './components/userprofile/user_profile.component';
import { LogoutComponent } from './components/login/logout.component';

import { StockDetailsComponent } from './stock-details/stock-details.component';

const routes: Routes = [
  {
    path: 'stock-patents', 
    component: StockPatentsComponent, 
    canActivate: [(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => inject(AuthGuard).canActivate(route, state)] 
  },
  { path: 'earnings', 
    component: EarningsComponent, 
    canActivate: [(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => inject(AuthGuard).canActivate(route, state)] 
  },
  { path: 'home', component: AppComponent, pathMatch: 'full' } ,
    { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
  { path: 'profile/:id', component: UserProfileComponent },
  { path: 'logout', component: LogoutComponent   },

  { path: 'stocks/:symbol', component: StockDetailsComponent }





  // { path: 'watchlist', component: WatchlistComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes),],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }