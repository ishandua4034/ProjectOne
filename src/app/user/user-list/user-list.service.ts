import { Injectable } from '@angular/core';
import users from '../../../assets/user.json';


@Injectable({
  providedIn: 'root'
})
export class UserListService {
  private userList=JSON.stringify(users);
  getUserList(){
    return JSON.parse(this.userList);
  }
  constructor() { }
}
