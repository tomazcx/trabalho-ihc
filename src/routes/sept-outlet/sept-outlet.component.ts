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
      href: '/espaco-estudante',
    },
    {
      label: 'Pesquisa e Extensão',
      href: '/pesquisa-e-extensao',
    },
    {
      label: 'Concursos e Testes',
      href: '/concursos-e-testes',
    },
  ];
}
