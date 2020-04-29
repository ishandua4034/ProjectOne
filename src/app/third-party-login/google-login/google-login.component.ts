import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { LoggedUserData } from '../logged-user-data.model';
import { AuthService, SocialUser, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.css']
})
export class GoogleLoginComponent implements OnInit {
  
  userData: LoggedUserData;
  private user : SocialUser;
   loggedIn: boolean;

  constructor(private authService: AuthService) { }

  signIn(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  signOut(): void {
    this.authService.signOut();
    this.userData = new LoggedUserData('','','',false);

  }

  ngOnInit(){
    this.authService.authState.subscribe((user)=>{
      if(user){
      this.userData = new LoggedUserData(
                user.name, 
                user.photoUrl, 
                user.email,
                true
                );
      this.loggedIn = (user != null);
      
    }})
  }

  // auth2: any;
  // @ViewChild('loginRef', {static: true}) loginElement: ElementRef;

  // constructor() { console.log("inside Constructor");}

  // ngOnInit(): void {
  //   this.googleSDK();
  //   console.log("inside INIT");
  // }
  // prepareLoginButton() {
 
  //   this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
  //     (googleUser) => {
 
  //       let profile = googleUser.getBasicProfile();
  //       console.log('Token || ' + googleUser.getAuthResponse().id_token);
  //       console.log('ID: ' + profile.getId());
  //       console.log('Name: ' + profile.getName());
  //       console.log('Image URL: ' + profile.getImageUrl());
  //       console.log('Email: ' + profile.getEmail());
  //       //YOUR CODE HERE

  //       this.userData = new LoggedUserData(
  //         profile.getName(), 
  //         profile.getImageUrl(), 
  //         profile.getEmail()
  //         );
 
 
  //     }, (error) => {
  //       alert(JSON.stringify(error, undefined, 2));
  //     });
 
  // }

  // googleSDK() {
 
  //   window['googleSDKLoaded'] = () => {
  //     window['gapi'].load('auth2', () => {
  //       this.auth2 = window['gapi'].auth2.init({
  //         client_id: '1065579699439-ke00j0375d004qgngluiofpk7u5gth8q.apps.googleusercontent.com',
  //         cookiepolicy: 'single_host_origin',
  //         scope: 'profile email'
  //       });
  //       this.prepareLoginButton();
  //     });
  //   }
 
  //   (function(d, s, id){
  //     var js, fjs = d.getElementsByTagName(s)[0];
  //     if (d.getElementById(id)) {return;}
  //     js = d.createElement(s); js.id = id;
  //     js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
  //     fjs.parentNode.insertBefore(js, fjs);
  //   }(document, 'script', 'google-jssdk'));
 
  // }

}
