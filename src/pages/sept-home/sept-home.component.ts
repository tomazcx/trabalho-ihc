import { Component } from '@angular/core';
import { MainBannerComponent } from '../../components';
import {
  AboutSectionComponent,
  AcademicSectionComponent,
  CoursesSectionComponent,
  NewsSectionComponent,
} from './components';

@Component({
  selector: 'sept-home',
  standalone: true,
  imports: [
    MainBannerComponent,
    AboutSectionComponent,
    NewsSectionComponent,
    AcademicSectionComponent,
    CoursesSectionComponent
  ],
  templateUrl: './sept-home.component.html',
  styleUrls: [
    './sept-home.component.scss',
  ],
})
export class SeptHomeComponent {
}
