import { DOCUMENT } from '@angular/common';
import { Component, inject, OnInit, Renderer2 } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '../../shared/shared.module';
import { SideNavService } from '../../app.component';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    SharedModule,
    MatToolbarModule,
    MatDividerModule,
    MatMenuModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent implements OnInit {
  isChecked = false;
  private renderer = inject(Renderer2);
  private document = inject(DOCUMENT);
  private sideNavService = inject(SideNavService);

  ngOnInit(): void {
    console.log(this.isChecked);
  }
  toogleNav() {
    this.sideNavService.toogleNav();
  }
  switchTheme() {
    console.log('mudou ' + this.isChecked);

    if (this.isChecked) {
      this.renderer.addClass(this.document.body, 'dark-mode');
    } else {
      this.renderer.removeClass(this.document.body, 'dark-mode');
    }
  }
}
