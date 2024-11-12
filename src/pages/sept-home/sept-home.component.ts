import { Component } from '@angular/core';
import { MainBannerComponent } from '../../components/main-banner/main-banner.component';

@Component({
  selector: 'sept-home',
  standalone: true,
  imports: [MainBannerComponent],
  templateUrl: './sept-home.component.html',
  styleUrl: './sept-home.component.scss',
})
export class SeptHomeComponent {}
