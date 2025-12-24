import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-buggati',
  standalone: true,
  templateUrl: './buggati.component.html',
  styleUrl: './buggati.component.scss',
  imports: [SharedModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuggatiComponent {}
