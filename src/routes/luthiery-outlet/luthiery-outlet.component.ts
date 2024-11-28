import { Component } from '@angular/core';
import { HeaderComponent, HeaderLink } from '../../components';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'luthiery-outlet',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './luthiery-outlet.component.html',
  styleUrl: './luthiery-outlet.component.scss',
})
export class LuthieryOutletComponent {
  headerNav: HeaderLink[] = [
    {
      label: 'Home',
      href: '/luteria',
    },
    {
      label: 'Corpo Docente',
      href: '/luteria/corpo-docente',
    },
    {
      label: 'MIMU',
      href: '/luteria/mimu',
    },
    {
      label: 'Espaço do Estudante',
      href: '/luteria/espaco-estudante',
    },
    {
      label: 'Pesquisa e Extensão',
      href: '/luteria/pesquisa-e-extensao',
    },
    {
      label: 'Coordenação',
      href: '/luteria/coordenacao',
    },
  ];
}
