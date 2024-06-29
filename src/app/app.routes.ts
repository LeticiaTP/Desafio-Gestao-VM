import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { HomeDashboardsComponent } from '../app/views/home-dashboards/home-dashboards.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path:'', redirectTo : 'login', pathMatch:'full'},
    {path: 'home', component: HomeDashboardsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }