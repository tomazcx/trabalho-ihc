import { Component } from '@angular/core';
import { MainBannerComponent, TableComponent } from '../../components';

@Component({
  selector: 'luthiery-faculty',
  standalone: true,
  imports: [MainBannerComponent, TableComponent],
  templateUrl: './luthiery-faculty.component.html',
  styleUrl: './luthiery-faculty.component.scss'
})
export class LuthieryFacultyComponent {
  tableColumns = ['Docente', 'Email', ''];
  tableBody = [
    ['John Doe', 'john.doe@gmail.com', 'Curriculum lates'],
    ['John Doe', 'john.doe@gmail.com', 'Curriculum lates'],
    ['John Doe', 'john.doe@gmail.com', 'Curriculum lates'],
    ['John Doe', 'john.doe@gmail.com', 'Curriculum lates'],
    ['John Doe', 'john.doe@gmail.com', 'Curriculum lates'],
    ['John Doe', 'john.doe@gmail.com', 'Curriculum lates'],
    ['John Doe', 'john.doe@gmail.com', 'Curriculum lates'],
    ['John Doe', 'john.doe@gmail.com', 'Curriculum lates'],
    ['John Doe', 'john.doe@gmail.com', 'Curriculum lates'],
    ['John Doe', 'john.doe@gmail.com', 'Curriculum lates'],
    ['John Doe', 'john.doe@gmail.com', 'Curriculum lates'],
    ['John Doe', 'john.doe@gmail.com', 'Curriculum lates'],
    ['John Doe', 'john.doe@gmail.com', 'Curriculum lates'],
    ['John Doe', 'john.doe@gmail.com', 'Curriculum lates'],
    ['John Doe', 'john.doe@gmail.com', 'Curriculum lates'],
    ['John Doe', 'john.doe@gmail.com', 'Curriculum lates'],
    ['John Doe', 'john.doe@gmail.com', 'Curriculum lates'],
    ['John Doe', 'john.doe@gmail.com', 'Curriculum lates'],
    ['John Doe', 'john.doe@gmail.com', 'Curriculum lates'],
    ['John Doe', 'john.doe@gmail.com', 'Curriculum lates'],
  ];
}
