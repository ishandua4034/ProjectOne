import { Component, OnInit } from '@angular/core';
import { UserListService } from './user-list.service';
import { GoogleLoginComponent } from 'src/app/third-party-login/google-login/google-login.component';
import { AuthService } from 'angularx-social-login';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  private authService: AuthService
  loggedUser = new GoogleLoginComponent(this.authService);
  
  userList:JSON;
  constructor(service: UserListService ) {
      this.userList=service.getUserList();
      
   }
   
 
  ngOnInit(): void {
  }

}
