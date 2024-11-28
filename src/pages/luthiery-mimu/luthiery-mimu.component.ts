import { Component } from '@angular/core';
import { ButtonComponent, MainBannerComponent } from '../../components';

@Component({
  selector: 'luthiery-mimu',
  standalone: true,
  imports: [MainBannerComponent, ButtonComponent],
  templateUrl: './luthiery-mimu.component.html',
  styleUrl: './luthiery-mimu.component.scss'
})
export class LuthieryMimuComponent {

}
