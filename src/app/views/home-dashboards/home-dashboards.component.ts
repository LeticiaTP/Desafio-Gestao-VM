import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';


@Component({
  selector: 'app-home-dashboards',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home-dashboards.component.html',
  styleUrl: './home-dashboards.component.css'
})
export class HomeDashboardsComponent {

  usuarioLogado: any;

  constructor(){
    const localUser = localStorage.getItem('usuarioLogado');
    if(localUser != null) {
      this.usuarioLogado = JSON.parse(localUser);
    }
  }
}
