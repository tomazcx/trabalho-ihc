import { Component } from '@angular/core';
import { MainBannerComponent, SectionTitleComponent } from '../../components';
import { PageCardComponent } from './components';

interface PageCard {
  title: string;
  path: string;
  subtitle: string;
  bannerSrc: string;
}

@Component({
  selector: 'sept-sector',
  standalone: true,
  imports: [MainBannerComponent, SectionTitleComponent, PageCardComponent],
  templateUrl: './sept-sector.component.html',
  styleUrl: './sept-sector.component.scss',
})
export class SeptSectorComponent {
  pageCards: PageCard[] = [
    {
      title: 'História',
      subtitle: 'Conheça o legado do setor',
      path: '/historia',
      bannerSrc: 'assets/banners/history.jpg',
    },
    {
      title: 'Corpo Docente',
      subtitle: 'Informações sobre os docentes do setor',
      path: '/corpo-docente',
      bannerSrc: 'assets/banners/faculty.jpg',
    },
    {
      title: 'Unidades do Setor',
      subtitle: 'Informações sobre as principais unidades do setor',
      path: '/unidades-setor',
      bannerSrc: 'assets/banners/sector-unities.jpg',
    },
    {
      title: 'Núcleo de Concursos',
      subtitle: 'Ingresse no SEPT',
      path: 'https://servicos.nc.ufpr.br/PortalNC/Home',
      bannerSrc: 'assets/banners/nc.jpg',
    },
    {
      title: 'Cursos',
      subtitle: 'Conheça os cursos do setor',
      path: '#',
      bannerSrc: 'assets/banners/courses.jpg',
    },
    {
      title: 'Lista de Sistemas',
      subtitle: 'Veja uma lista dos principais sistemas do SEPT',
      path: '/lista-sistemas',
      bannerSrc: 'assets/banners/systems-list.jpg',
    },
    {
      title: 'Colegiados',
      subtitle: 'Veja os colegiados dos cursos do SEPT',
      path: '/colegiados',
      bannerSrc: 'assets/banners/collegial.jpg',
    },
    {
      title: 'Teletrabalho',
      subtitle: 'Conheça mais no site do .gov',
      path: '/teletrabalho',
      bannerSrc: 'assets/banners/teleworking.jpg',
    },
    {
      title: 'Solicitação de Estágio',
      subtitle: 'Clique para abrir uma solicitação',
      path: '/solicitacao-estagio',
      bannerSrc: 'assets/banners/internship.jpg',
    },
  ];
}
