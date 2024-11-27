import { Component } from '@angular/core';
import {
  GoBackLinkComponent,
  MainBannerComponent,
  TableComponent,
} from '../../components';

@Component({
  selector: 'sept-collegial',
  standalone: true,
  imports: [MainBannerComponent, GoBackLinkComponent, TableComponent],
  templateUrl: './sept-collegial.component.html',
  styleUrl: './sept-collegial.component.scss',
})
export class SeptCollegialComponent {
  tableColumns = ['Cursos', 'Portaria SEPT'];
  tableBody = [
    [
      'Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas (TADS)	',
      '59/2024 em 19/08/2024',
    ],
    [
      'Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas (TADS)	',
      '59/2024 em 19/08/2024',
    ],
    [
      'Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas (TADS)	',
      '59/2024 em 19/08/2024',
    ],
    [
      'Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas (TADS)	',
      '59/2024 em 19/08/2024',
    ],
  ];
}
