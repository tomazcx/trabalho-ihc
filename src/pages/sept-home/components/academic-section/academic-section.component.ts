import { Component } from '@angular/core';
import { ButtonComponent, SectionTitleComponent } from '../../../../components';

@Component({
  selector: 'academic-section',
  standalone: true,
  imports: [ButtonComponent, SectionTitleComponent],
  templateUrl: './academic-section.component.html',
  styleUrl: './academic-section.component.scss',
})
export class AcademicSectionComponent {}
