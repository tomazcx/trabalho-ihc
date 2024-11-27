import { Component } from '@angular/core';
import {
  GoBackLinkComponent,
  MainBannerComponent,
  TableComponent,
} from '../../components';

@Component({
  selector: 'sept-sector-unities',
  standalone: true,
  imports: [MainBannerComponent, GoBackLinkComponent, TableComponent],
  templateUrl: './sept-sector-unities.component.html',
  styleUrl: './sept-sector-unities.component.scss',
})
export class SeptSectorUnitiesComponent {
  sampleColumns = ['Docente', 'Email', ''];
  sampleBody = [
    ['John Doe', 'john.doe@gmail.com', 'Curriculum lates'],
    ['John Doe', 'john.doe@gmail.com', 'Curriculum lates'],
    ['John Doe', 'john.doe@gmail.com', 'Curriculum lates'],
    ['John Doe', 'john.doe@gmail.com', 'Curriculum lates'],
  ];
}
