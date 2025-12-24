import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BuggatiComponent } from './pages/buggati/buggati.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'buggati', component: BuggatiComponent },
];
