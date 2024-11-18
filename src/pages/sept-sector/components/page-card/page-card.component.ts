import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'page-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './page-card.component.html',
  styleUrl: './page-card.component.scss',
})
export class PageCardComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() path: string;
  @Input() bannerSrc: string;
}
