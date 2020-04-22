import { Component, OnInit } from '@angular/core';
import { TaskTwoService } from './task-two.service';


@Component({
  selector: 'app-task-two',
  templateUrl: './task-two.component.html',
  styleUrls: ['./task-two.component.css']
})
export class TaskTwoComponent implements OnInit {
  json: JSON;
  constructor(service: TaskTwoService) {
    this.json=service.getJson();
  }
 clickFunction(event,user){
   let textToPop:string=user.firstName +" "+user.lastName +" is "+user.age+ " year old "+user.sex+" Cricketer.";
   alert(textToPop);
 }
 
  ngOnInit(): void {}
    
}


