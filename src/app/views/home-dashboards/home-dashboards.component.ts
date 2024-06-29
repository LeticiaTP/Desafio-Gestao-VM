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

}
