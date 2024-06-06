import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/Layout/layout.component';
import { EarningsComponent } from './components/Earnings/Earnings.component';
import { LoginComponent } from './components/login/Login.component';
import { RegisterComponent } from './components/register/Register.component';
import { StockPatentsComponent } from './components/detail-stock/stock-patents.component';
import { UserProfileComponent } from './components/userprofile/user_profile.component';
import { LogoutComponent } from './components/login/logout.component';
import { SafeUrlPipe } from './components/userprofile/safe-url.pipe';

import { TickerService } from './components/Earnings/earning_api.service';
import { FinnhubService } from './components/detail-stock/finnhub.service';
import { UserProfileService } from './components/userprofile/user_profile.service';
import { LoginService } from './components/login/login.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CanvasJS, CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

import { StockDetailsComponent } from './stock-details/stock-details.component';
import { CarouselModule } from '@coreui/angular';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    
    AppComponent,
    LayoutComponent,
    EarningsComponent,
    LoginComponent,
    RegisterComponent,
    StockPatentsComponent,
    UserProfileComponent,
    LogoutComponent,
    SafeUrlPipe,
    StockDetailsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgChartsModule,
    CanvasJSAngularChartsModule,
    ReactiveFormsModule,
    CarouselModule,
    CanvasJSAngularChartsModule,
  
  ],
  providers: [TickerService, FinnhubService, UserProfileService, LoginService, provideAnimationsAsync()],
  bootstrap: [LayoutComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
