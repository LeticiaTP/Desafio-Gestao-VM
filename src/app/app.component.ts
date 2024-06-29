import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/components/header/header.component';
import { LoginComponent } from './views/login/login.component';
import { HomeDashboardsComponent } from  './views/home-dashboards/home-dashboards.component'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HeaderComponent, LoginComponent, HomeDashboardsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Desafio-Gestao-VM';
}
