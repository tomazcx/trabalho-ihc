import { Component } from '@angular/core';
import { MainBannerComponent } from '../../components';
import {
  AboutSectionComponent,
  AcademicSectionComponent,
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
  ],
  templateUrl: './sept-home.component.html',
  styleUrl: './sept-home.component.scss',
})
export class SeptHomeComponent {}
