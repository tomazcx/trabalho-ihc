import { Component } from '@angular/core';
import { MainBannerComponent } from '../../components';
import { AboutSectionComponent, InfoSectionComponent } from './components';

@Component({
  selector: 'luthiery-home',
  standalone: true,
  imports: [MainBannerComponent, AboutSectionComponent, InfoSectionComponent],
  templateUrl: './luthiery-home.component.html',
  styleUrl: './luthiery-home.component.scss',
})
export class LuthieryHomeComponent {}
