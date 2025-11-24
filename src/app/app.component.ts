import { Component, inject, Injectable, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CustomSideNavComponent } from './components/sidebar/custom-sidenav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToolbarComponent, MatSidenavModule, CustomSideNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'projeto-base-com-sidebar';
  sideNavService = inject(SideNavService);
  IsOpen = this.sideNavService.IsOpen;
}

@Injectable({ providedIn: 'root' })
export class SideNavService {
  IsOpen = signal(false);
  toogleNav() {
    this.IsOpen.update((value) => !value);
  }
}
