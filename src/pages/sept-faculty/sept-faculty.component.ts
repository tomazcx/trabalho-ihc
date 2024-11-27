import { Component } from '@angular/core';
import {
  GoBackLinkComponent,
  MainBannerComponent,
  TableComponent,
} from '../../components';

@Component({
  selector: 'sept-faculty',
  standalone: true,
  imports: [MainBannerComponent, GoBackLinkComponent, TableComponent],
  templateUrl: './sept-faculty.component.html',
  styleUrl: './sept-faculty.component.scss',
})
export class SeptFacultyComponent {
  sampleColumns = ['Docente', 'Email', ''];
  sampleBody = [
    ['John Doe', 'john.doe@gmail.com', 'Curriculum lates'],
    ['John Doe', 'john.doe@gmail.com', 'Curriculum lates'],
    ['John Doe', 'john.doe@gmail.com', 'Curriculum lates'],
    ['John Doe', 'john.doe@gmail.com', 'Curriculum lates'],
  ];
}
