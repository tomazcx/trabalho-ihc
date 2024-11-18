import { Component } from '@angular/core';
import {
  GoBackLinkComponent,
  MainBannerComponent,
  SectionTitleComponent,
  SocialMediaShareComponent,
} from '../../components';

@Component({
  selector: 'sept-history',
  standalone: true,
  imports: [
    MainBannerComponent,
    GoBackLinkComponent,
    SectionTitleComponent,
    SocialMediaShareComponent,
  ],
  templateUrl: './sept-history.component.html',
  styleUrl: './sept-history.component.scss',
})
export class SeptHistoryComponent {}
