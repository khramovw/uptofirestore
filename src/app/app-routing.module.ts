import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import {UploadComponent} from "./components/upload/upload.component";
import {NotfoundpageComponent} from "./components/notfoundpage/notfoundpage.component";
import {HomeComponent} from "./components/home/home.component";
import {SigninComponent} from "./components/signin/signin.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'signin', component: SigninComponent },
  { path: '**', component: NotfoundpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
