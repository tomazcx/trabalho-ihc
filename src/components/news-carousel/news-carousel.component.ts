import { Component } from '@angular/core';
import Glide from '@glidejs/glide';

@Component({
  selector: 'news-carousel',
  standalone: true,
  imports: [],
  templateUrl: './news-carousel.component.html',
  styleUrl: './news-carousel.component.scss',
})
export class NewsCarouselComponent {
  ngOnInit() {
    new Glide('.glide', {
      type: 'carousel',
      startAt: 0,
      perView: 1,
      gap: 0,
      hoverpause: true,
      rewind: true,
    }).mount();
  }
}
