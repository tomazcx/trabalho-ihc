import { Component } from '@angular/core';
import {
  ButtonComponent,
  GoBackLinkComponent,
  MainBannerComponent,
  SectionTitleComponent,
} from '../../components';

@Component({
  selector: 'sept-internship-form',
  standalone: true,
  imports: [
    MainBannerComponent,
    GoBackLinkComponent,
    SectionTitleComponent,
    ButtonComponent,
  ],
  templateUrl: './sept-internship-form.component.html',
  styleUrl: './sept-internship-form.component.scss',
})
export class SeptInternshipFormComponent {}
