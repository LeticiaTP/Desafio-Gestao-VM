import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path:'', redirectTo : 'login', pathMatch:'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }