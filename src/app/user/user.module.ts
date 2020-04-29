import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListService } from './user-list/user-list.service';
import { UserDetailService } from './user-detail/user-detail.service';
import { Routes, RouterModule } from '@angular/router';
import { ThirdPartyLoginModule } from '../third-party-login/third-party-login.module';


@NgModule({
  declarations: [
    UserDetailComponent,
    UserListComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ThirdPartyLoginModule
  ],
  providers:[
    UserDetailService,
    UserListService
  ]
 
})
export class UserModule { }
