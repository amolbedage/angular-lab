import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { IssueBookComponent } from './issue-book/issue-book.component';



  
@NgModule({
  declarations: [
    AppComponent,
  
    ReactiveFormsComponent,
    LoginComponent,
    DashboardComponent,
    AddBooksComponent,
    SearchBooksComponent,
    IssueBookComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [ 
     { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
