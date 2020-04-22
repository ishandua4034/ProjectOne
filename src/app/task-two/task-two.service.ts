import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskTwoService {
  private jsonText: string = '[{"users":' +
  '[{"firstName": "David", "lastName": "Warner", "age": "33", "sex": "Male"},'+
  '{"firstName": "Virat", "lastName": "Kohli", "age": "32", "sex": "Male"},'+
  '{"firstName": "Sarah", "lastName": "Taylor", "age": "31", "sex": "Female"},'+
  '{"firstName": "Jhulan", "lastName": "Goswami", "age": "34", "sex": "Female"},'+
  '{"firstName": "Ricky", "lastName": "Ponting", "age": "40", "sex": "Male"},'+
  '{"firstName": "Chris", "lastName": "Gayle", "age": "35", "sex": "Male"},'+
  '{"firstName": "Mahendra S.", "lastName": "Dhoni", "age": "36", "sex": "Male"}]}]';
    getJson(){
        return JSON.parse(this.jsonText);
      }

  constructor() { }
}
