import { Component } from '@angular/core';
import { HeaderComponent, HeaderLink } from '../../components';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'sept-outlet',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './sept-outlet.component.html',
  styleUrl: './sept-outlet.component.scss',
})
export class SeptOutletComponent {
  headerNav: HeaderLink[] = [
    {
      label: 'Home',
      href: '',
    },
    {
      label: 'Setor',
      href: '/setor',
    },
    {
      label: 'Espaço do Estudante',
      href: '/lista-sistemas',
    },
    {
      label: 'Notícias',
      href: '/noticias',
    },
    {
      label: 'Corpo Docente',
      href: '/corpo-docente',
    },
  ];
}
