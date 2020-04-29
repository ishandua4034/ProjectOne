import { Component, OnInit } from '@angular/core';
import { UserDetailService } from './user-detail.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  
  usersDetail:JSON;
  id:number;
  userDetail;
  constructor(service: UserDetailService, private route: ActivatedRoute) {
    
    this.usersDetail=service.getJson();
    this.id= this.route.snapshot.params['id']; 

    for(let user in this.usersDetail){
      let users=this.usersDetail[user];
      if(users.userId==this.id){
          this.userDetail=users;
      }
    }
   }

  ngOnInit(): void {
   
  }

}
