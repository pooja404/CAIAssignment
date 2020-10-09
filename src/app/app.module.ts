import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Tab1Component } from './tab1/tab1.component';
import { HttpClientModule } from '@angular/common/http';
import { ApplicantDataComponent } from './applicantData/applicantData.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicantDataComponent,
    Tab1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'login',component:ApplicantDataComponent},
      {path:'tab1',component:Tab1Component}

     ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
