import { Component } from '@angular/core';
import {
  NewsCarouselComponent,
  PaginationComponent,
  SectionTitleComponent,
} from '../../components';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'sept-news-list',
  standalone: true,
  imports: [
    SectionTitleComponent,
    NewsCarouselComponent,
    RouterModule,
    PaginationComponent,
  ],
  templateUrl: './sept-news-list.component.html',
  styleUrl: './sept-news-list.component.scss',
})
export class SeptNewsListComponent {}
