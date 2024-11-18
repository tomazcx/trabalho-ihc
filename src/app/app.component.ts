import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  HeaderComponent,
  MainBannerComponent,
  FooterComponent,
} from '../components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    MainBannerComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'site-sept';
}
