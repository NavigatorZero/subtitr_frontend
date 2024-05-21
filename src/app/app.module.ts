import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HttpClientModule } from "@angular/common/http";
import { VideoHttpService } from "../services/video.http.service";
import { HttpService } from "../services/http.service";
import { AlertModule } from "ngx-bootstrap/alert";
import { AuthComponent } from './components/auth/auth.component';
import { AuthHttpService } from '../services/auth.http.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppLkComponent } from './components/lk/lk.component';
import { DropzoneCdkModule } from '@ngx-dropzone/cdk';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DropzoneMaterialModule } from '@ngx-dropzone/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { AuthGuard } from './guards/auth.guard';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/user/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/user/user.effects';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarService } from '../services/snackbar.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AuthComponent,
    AppLkComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatToolbarModule,
    MatSnackBarModule,    
    MatMenuModule,            
    DropzoneCdkModule,
    DropzoneMaterialModule,
    TooltipModule.forRoot(),
    AlertModule.forRoot(),
    StoreModule.forRoot({user: userReducer}, {}),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.isProduction, // Restrict extension to log-only mode
    }),
  ],
  providers: [
    HttpService,
    VideoHttpService,
    AuthHttpService,
    SnackbarService,
    AuthGuard,
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
