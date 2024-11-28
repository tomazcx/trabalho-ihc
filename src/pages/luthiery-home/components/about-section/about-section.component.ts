import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../components';

@Component({
  selector: 'about-section',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent {

}
