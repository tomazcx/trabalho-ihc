import { Component, Input } from '@angular/core';

@Component({
  selector: 'main-banner',
  standalone: true,
  imports: [],
  templateUrl: './main-banner.component.html',
  styleUrl: './main-banner.component.scss'
})
export class MainBannerComponent {
  @Input() title: string
  @Input() subtitle: string
}
