import { Component } from '@angular/core';
import {
  GoBackLinkComponent,
  NewsMainBannerComponent,
  SectionTitleComponent,
  SocialMediaShareComponent,
} from '../../components';

@Component({
  selector: 'sept-news',
  standalone: true,
  imports: [
    NewsMainBannerComponent,
    SocialMediaShareComponent,
    SectionTitleComponent,
    GoBackLinkComponent,
  ],
  templateUrl: './sept-news.component.html',
  styleUrl: './sept-news.component.scss',
})
export class SeptNewsComponent {}
