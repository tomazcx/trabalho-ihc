import { Component } from '@angular/core';
import { ButtonComponent, SectionTitleComponent } from '../../../../components';
import Glide from '@glidejs/glide';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'courses-section',
  standalone: true,
  imports: [ButtonComponent, SectionTitleComponent, RouterModule],
  templateUrl: './courses-section.component.html',
  styleUrl: './courses-section.component.scss',
})
export class CoursesSectionComponent {
  ngOnInit() {
    new Glide('.glide', {
      startAt: 1,
      perView: 1,
      gap:0,
      hoverpause: true,
      peek: 475,
      rewind:true
    }).mount();
  }
}
