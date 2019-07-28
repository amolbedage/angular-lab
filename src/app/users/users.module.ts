import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path: '', component: UsersComponent,
    children: [
      {path: 'user-list', component: UsersListComponent },
      {path: 'user-profile', component:UserProfileComponent},
      { path: '', redirectTo: 'user-list'}
    ]
  }
]
@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule { }
