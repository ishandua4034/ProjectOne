import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { UserModule } from './user/user.module';
import { ThirdPartyLoginModule } from './third-party-login/third-party-login.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

let userStaus = false;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    ThirdPartyLoginModule,
    FontAwesomeModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
