import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { ChangeDetectionStrategy, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-home-dashboards',
  standalone: true,
  imports: [HeaderComponent, MatExpansionModule, MatSidenavModule],
  templateUrl: './home-dashboards.component.html',
  styleUrl: './home-dashboards.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeDashboardsComponent {
  readonly panelOpenState = signal(false);
}
