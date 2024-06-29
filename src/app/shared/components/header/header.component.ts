import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  usuarioLogado: any;

  constructor(private router: Router){
    const localUser = localStorage.getItem('usuarioLogado');
    if(localUser != null) {
      this.usuarioLogado = JSON.parse(localUser);
    }
  }

  logoff() {
    localStorage.removeItem('usuarioLogado');
    this.router.navigateByUrl('/login');
  }
}
