import { Component } from '@angular/core';
import {
  GoBackLinkComponent,
  MainBannerComponent,
  SectionTitleComponent,
} from '../../components';

interface SystemLink {
  label: string;
  href: string;
}

@Component({
  selector: 'sept-systems-list',
  standalone: true,
  imports: [MainBannerComponent, GoBackLinkComponent, SectionTitleComponent],
  templateUrl: './sept-systems-list.component.html',
  styleUrls: ['./sept-systems-list.component.scss'],
})
export class SeptSystemsListComponent {
  systems: SystemLink[] = [
    {
      label: 'Secretaria On-line',
      href: 'http://200.236.3.198:28080/secretariaonline/Home',
    },
    {
      label: 'Agenda',
      href: '#',
    },
    {
      label: 'Sistema de Reserva de Salas',
      href: '#',
    },
    {
      label: 'Emissão de Portarias',
      href: '#',
    },
    {
      label: 'SEI',
      href: 'https://sei.gov.br',
    },
    {
      label: 'Manual',
      href: '#',
    },
    {
      label: 'SIGA',
      href: 'https://siga.ufpr.br/siga/',
    },
    {
      label: 'Sistema de Cadastro SEPT',
      href: '#',
    },
    {
      label: 'Teletrabalho',
      href: '#',
    },
    {
      label: 'Boletim de Gestão de Pessoas',
      href: '#',
    },
    {
      label: 'Tutorial Moodle',
      href: '#',
    },
    {
      label: 'Sistema de Apoio CEED',
      href: '#',
    },
    {
      label: 'Sistema de Grade Horária',
      href: '#',
    },
    {
      label: 'Portal SIPEC',
      href: 'https://www.sipec.gov.br',
    },
  ];
}