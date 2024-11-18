import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherGlobe, featherMapPin } from '@ng-icons/feather-icons';

interface LinksInterface {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ featherGlobe, featherMapPin })],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  links: LinksInterface[] = [
    {
      title: 'Sites de interesse',
      links: [
        {
          label: 'Ministério da educação',
          href: '/',
        },
        {
          label: 'Portal da transparência',
          href: '/',
        },
        {
          label: 'Capes',
          href: '/',
        },
        {
          label: 'Cnpq',
          href: '/',
        },
        {
          label: 'Funpar',
          href: '/',
        },
        {
          label: 'SOU.GOV',
          href: '/',
        },
      ],
    },
    {
      title: 'SIGA e Outros Serviços',
      links: [
        { label: 'Vestibular / Núcleo de Concursos', href: '/' },
        { label: 'Secretaria dos Órgãos Colegiados', href: '/' },
        { label: 'Bibliotecas - SIBI', href: '/' },
        { label: 'Celin - Línguas', href: '/' },
        { label: 'Mobilidade Internacional', href: '/' },
        { label: 'Comissão de Ética', href: '/' },
        { label: 'Hospital de Clínicas', href: '/' },
        { label: 'Editora da UFPR', href: '/' },
        { label: 'SPIN/UFPR', href: '/' },
        { label: 'SUINFRA', href: '/' },
      ],
    },
    {
      title: 'Pró-Reitorias',
      links: [
        { label: 'Pró-Reitoria de Administração', href: '/' },
        { label: 'Pró-Reitoria de Assuntos Estudantis', href: '/' },
        { label: 'Pró-Reitoria de Extensão e Cultura', href: '/' },
        { label: 'Pró-Reitoria de Gestão de Pessoas', href: '/' },
        {
          label: 'Pró-Reitoria de Graduação e Educação Profissional',
          href: '/',
        },
        { label: 'Pró-Reitoria de Pesquisa e Pós-graduação', href: '/' },
        {
          label: 'Pró-Reitoria de Planejamento, Orçamento e Finanças',
          href: '/',
        },
      ],
    },
    {
      title: 'Setores da UFPR',
      links: [
        { label: 'Setor de Artes, Comunicação e Design', href: '/' },
        { label: 'Setor de Ciências Agrárias', href: '/' },
        { label: 'Setor de Ciências Biológicas', href: '/' },
        { label: 'Setor de Ciências da Saúde', href: '/' },
        { label: 'Setor de Ciências da Terra', href: '/' },
        { label: 'Setor de Ciências Exatas', href: '/' },
        { label: 'Setor de Ciências Humanas', href: '/' },
        { label: 'Setor de Ciências Jurídicas', href: '/' },
        { label: 'Setor de Ciências Sociais Aplicadas', href: '/' },
        { label: 'Setor de Educação', href: '/' },
        { label: 'Setor de Educação Profissional e Tecnológica', href: '/' },
        { label: 'Setor de Jandaia do Sul', href: '/' },
        { label: 'Setor de Tecnologia', href: '/' },
        { label: 'Setor Litoral', href: '/' },
        { label: 'Setor Palotina', href: '/' },
      ],
    },
  ];
}
