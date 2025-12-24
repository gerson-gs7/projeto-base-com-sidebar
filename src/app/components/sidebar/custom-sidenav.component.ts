import { Component, signal } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MatListModule } from '@angular/material/list';

export interface MenuItem {
  icon: string;
  label: string;
  route?: string;
}

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [SharedModule, MatListModule],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss',
})
export class CustomSideNavComponent {
  menuItems = signal<MenuItem[]>([
    {
      icon: 'analytics',
      label: 'Analytics',
      route: '/analytics',
    },
    {
      icon: 'star',
      label: 'Buggati',
      route: '/buggati',
    },
    {
      icon: 'app_registration',
      label: 'App registration',
      route: '/app_registration',
    },
    {
      icon: 'view_timeline',
      label: 'View timeline',
      route: '/view_timeline',
    },
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: '/dashboard',
    },
  ]);
}
