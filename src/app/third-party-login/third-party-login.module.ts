import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginGoogleComponent } from './google-login/login-google.component';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider} from "angularx-social-login";

const googleClientId: string = '1065579699439-ke00j0375d004qgngluiofpk7u5gth8q.apps.googleusercontent.com';

let config = new AuthServiceConfig([{
  id: GoogleLoginProvider.PROVIDER_ID,
  provider: new GoogleLoginProvider(googleClientId)
}]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [LoginGoogleComponent],
  imports: [
    CommonModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }],
    exports:[
      LoginGoogleComponent
    ]
})
export class ThirdPartyLoginModule { }
