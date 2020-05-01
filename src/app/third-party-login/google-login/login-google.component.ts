import { Component, OnInit,  Output, EventEmitter, OnDestroy } from '@angular/core';
import { LoggedUserData } from '../models/user.model';
import { AuthService, SocialUser, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-login-google',
  templateUrl: './login-google.component.html',
  styleUrls: ['./login-google.component.css']
})
export class LoginGoogleComponent implements OnInit{
  
  userData: LoggedUserData;
  private user: SocialUser;
  @Output() userObj = new EventEmitter<SocialUser>();  //custom event of this component created to emit user Object 
  loggedIn = false;

  constructor(private authService: AuthService) { }

  signIn(): void {
    this.authService.signIn(
      GoogleLoginProvider.PROVIDER_ID).then(()=>{},
        (err)=>{alert('Error: '+err)}); // error will be caught 
  }
  signOut(): void {
    this.authService.signOut();
    this.userData = new LoggedUserData('','','');
  }

  ngOnInit(): void{
    let subsub= this.authService.authState.subscribe((user)=>{
      if(user){
      this.userData = new LoggedUserData(
                user.name, 
                user.photoUrl, 
                user.email
                );
      this.loggedIn=true;
      this.user=user; //user object saved in local variable user
      this.userObj.emit(user); //emits user object 
      }
    },(err)=>{alert('Error: ' + err);}) //alert if throws any error
  }
}
