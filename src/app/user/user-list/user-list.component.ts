import { Component, OnInit } from '@angular/core';
import { UserListService } from './user-list.service';
import { AuthService } from 'angularx-social-login';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  private authService: AuthService
  
  userList:JSON;
  constructor(service: UserListService ) {
      this.userList=service.getUserList();
      
   }
   
 
  ngOnInit(): void {
  }

}
