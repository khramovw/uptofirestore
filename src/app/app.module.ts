import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Fire store
import { AngularFireModule } from "angularfire2";
import { AngularFireStorageModule } from "angularfire2/storage";

//Material
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatProgressSpinnerModule, MatProgressBarModule, MatCardModule } from "@angular/material";
// import { MatIconModule } from '@angular/material/icon';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { MatCardModule } from '@angular/material/card';
// import { MatToolbarModule } from "@angular/material/toolbar";


//App routing
import { AppRoutingModule } from './app-routing.module';

//Environments
import { environment } from "../environments/environment";

// Components
import { AppComponent } from './app.component';
import { UploadComponent } from './components/upload/upload.component';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';
import { HomeComponent } from './components/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SigninComponent } from './components/signin/signin.component';



@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    NotfoundpageComponent,
    HomeComponent,
    ToolbarComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
