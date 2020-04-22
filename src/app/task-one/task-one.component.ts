import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-one',
  templateUrl: './task-one.component.html',
  styleUrls: ['./task-one.component.css']
})
export class TaskOneComponent implements OnInit {
  private jsonText: string = '[{"users": [{"name": "User A"},{"name": "User B"},{"name": "User C"}]}]';
  private json1: JSON;
  constructor() { 
    this.json1=JSON.parse(this.jsonText);
  }
  getJson(){
    return this.json1;
  }
  ngOnInit(): void {
  }

}
