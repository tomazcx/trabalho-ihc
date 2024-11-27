import { Component } from '@angular/core';
import { MainBannerComponent, TableComponent } from '../../components';

@Component({
  selector: 'luthiery-course-coordination',
  standalone: true,
  imports: [MainBannerComponent, TableComponent],
  templateUrl: './luthiery-course-coordination.component.html',
  styleUrl: './luthiery-course-coordination.component.scss'
})
export class LuthieryCourseCoordinationComponent {
  tableColumns = ['Docente', 'Email', ''];
  tableBody = [
    ['John Doe', 'john.doe@gmail.com', 'Curriculum lates'],
    ['John Doe', 'john.doe@gmail.com', 'Curriculum lates'],
    ['John Doe', 'john.doe@gmail.com', 'Curriculum lates'],
    ['John Doe', 'john.doe@gmail.com', 'Curriculum lates'],
  ];
}
