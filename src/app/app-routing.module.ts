import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DataTablesModule} from 'angular-datatables';
import { ReactiveFormsComponent} from './reactive-forms/reactive-forms.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {   HttpClientModule } from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import {AuthGuardService as AuthGuard} from './guards/auth-guard.service';
import {RoleGuardService as RoleGuard} from './_helpers/RoleGuardService';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { IssueBookComponent } from './issue-book/issue-book.component';

import { from } from 'rxjs';

const routes: Routes = [

{path:'login',component:LoginComponent},
{ path:'dashboard',component:DashboardComponent, canActivate:[RoleGuard,AuthGuard],data: { expectedRole: 'Admin'},
},
{ path:'add-books',component:AddBooksComponent, canActivate:[RoleGuard,AuthGuard],data: { expectedRole: 'Admin'},
},
{ path:'issue-book',component:IssueBookComponent, canActivate:[RoleGuard,AuthGuard],data: { expectedRole: 'Admin'},
},


{path:'reactive-forms',component:ReactiveFormsComponent},
{ path: '', redirectTo: '/login', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,DataTablesModule,FormsModule,ReactiveFormsModule,HttpClientModule]
})
export class AppRoutingModule { }
