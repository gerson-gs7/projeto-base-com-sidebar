import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [SharedModule, MatToolbarModule, MatDividerModule, MatMenuModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {}
