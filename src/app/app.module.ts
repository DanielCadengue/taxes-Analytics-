import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';
import { AngularFireModule } from '@angular/fire'

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { FirebaseService } from './services/firebase.service';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyA_G1pLVnChpSo6HDPxaxD2b1a7n09HEPM",
    authDomain: "taxes-analytics.firebaseapp.com",
    databaseURL: "https://taxes-analytics.firebaseio.com",
    projectId: "taxes-analytics",
    storageBucket: "taxes-analytics.appspot.com",
    messagingSenderId: "874283235403",
    appId: "1:874283235403:web:c4260a97248e25e849f5ce",
    measurementId: "G-D6JR4C1XQ5"
    
    }),
    ToastrModule.forRoot()
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, LoginComponent],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule {}
