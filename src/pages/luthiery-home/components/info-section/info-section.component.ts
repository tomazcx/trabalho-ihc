import { Component } from '@angular/core';
import { ButtonComponent, SectionTitleComponent } from '../../../../components';

@Component({
  selector: 'info-section',
  standalone: true,
  imports: [SectionTitleComponent, ButtonComponent],
  templateUrl: './info-section.component.html',
  styleUrl: './info-section.component.scss',
})
export class InfoSectionComponent {}
