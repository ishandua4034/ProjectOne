import { Injectable } from '@angular/core';
import users from '../../../assets/userDetail.json';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {
  private userDetail= JSON.stringify(users);
  getJson(){
      return JSON.parse(this.userDetail);
  }

  constructor() { }
}
