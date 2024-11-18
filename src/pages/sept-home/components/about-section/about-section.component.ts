import { Component } from '@angular/core';
import { AboutTopicComponent } from '../about-topic/about-topic.component';
import { SectionTitleComponent } from '../../../../components';

@Component({
  selector: 'about-section',
  standalone: true,
  imports: [AboutTopicComponent, SectionTitleComponent],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss',
})
export class AboutSectionComponent {}
