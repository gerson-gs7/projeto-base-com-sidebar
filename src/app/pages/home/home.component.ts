import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MatButton } from "@angular/material/button";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule, MatButton],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
