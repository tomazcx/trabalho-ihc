import { Component, Input } from '@angular/core';

@Component({
  selector: 'about-topic',
  standalone: true,
  imports: [],
  templateUrl: './about-topic.component.html',
  styleUrls: ['./about-topic.component.scss'],
})
export class AboutTopicComponent {
  @Input() title: string;
  @Input() content: string;
}
