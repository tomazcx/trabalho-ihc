import { Component } from '@angular/core';
import { ButtonComponent, SectionTitleComponent } from '../../../../components';
import { NewsItemComponent } from '../news-item/news-item.component';

interface NewsItem {
  title: string;
  publishDate: string;
  publisher: string;
  preview: string;
  path: string;
}

@Component({
  selector: 'news-section',
  standalone: true,
  imports: [ButtonComponent, SectionTitleComponent, NewsItemComponent],
  templateUrl: './news-section.component.html',
  styleUrl: './news-section.component.scss',
})
export class NewsSectionComponent {
  news: NewsItem[] = [
    {
      title: 'Novo tipo de acesso ao Office 365',
      publishDate: '16 de outubro de 2024',
      publisher: 'Belinski',
      preview:
        'Ativação de Duplo Fator de Autenticação nas contas do Microsoft 365 Seguindo a política de […]',
      path: '/news/1',
    },
    {
      title: 'Inventário patrimonial 2024',
      publishDate: '19 de setembro de 2024',
      publisher: 'Belinski',
      preview:
        'O Inventário 2024 do acervo patrimonial da UFPR se encerrará no dia 30/09/2024. Gestão do […]',
      path: '/news/1',
    },
    {
      title: 'Inscrições abertas para vaga docente em Contabilidade',
      publishDate: '12 de agosto de 2024',
      publisher: 'Belinski',
      preview:
        'Teste Seletivo docente na área de Contabilidade está com inscrições abertas até dia 23 de […]',
      path: '/news/1',
    },
    {
      title: 'Inscrições no 31º EVINCI ou 16º EINTI até dia 22/08',
      publishDate: '8 de agosto de 2024',
      publisher: 'Belinski',
      preview:
        'Prezadas e Prezados Docentes vinculados ao Programa de Iniciação Científica e Tecnológica (ICT) do Edital […]',
      path: '/news/1',
    },
  ];
}
