import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'news-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './news-item.component.html',
  styleUrl: './news-item.component.scss',
})
export class NewsItemComponent {
  @Input() title: string;
  @Input() publishDate: string;
  @Input() publisher: string;
  @Input() preview: string;
  @Input() path:string;
}
