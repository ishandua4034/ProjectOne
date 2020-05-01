import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { TaskOneComponent } from './task-one/task-one.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { LoginGoogleComponent } from './third-party-login/google-login/login-google.component';


const routes: Routes = [
    { path: '', component: LoginGoogleComponent },
    { path: 'user-detail/:id', component: UserDetailComponent },
    { path: 'user-list', component: UserListComponent },
    { path: 'taskone', component: TaskOneComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
