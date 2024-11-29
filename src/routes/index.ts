import { LuthieryCourseCoordinationComponent } from '../pages/luthiery-course-coordination/luthiery-course-coordination.component';
import { LuthieryFacultyComponent } from '../pages/luthiery-faculty/luthiery-faculty.component';
import { LuthieryHomeComponent } from '../pages/luthiery-home/luthiery-home.component';
import { LuthieryMimuComponent } from '../pages/luthiery-mimu/luthiery-mimu.component';
import { LuthieryStudentSpaceComponent } from '../pages/luthiery-student-space/luthiery-student-space.component';
import { SeptCollegialComponent } from '../pages/sept-collegial/sept-collegial.component';
import { SeptFacultyComponent } from '../pages/sept-faculty/sept-faculty.component';
import { SeptHistoryComponent } from '../pages/sept-history/sept-history.component';
import { SeptHomeComponent } from '../pages/sept-home/sept-home.component';
import { SeptInternshipFormComponent } from '../pages/sept-internship-form/sept-internship-form.component';
import { SeptNewsListComponent } from '../pages/sept-news-list/sept-news-list.component';
import { SeptNewsComponent } from '../pages/sept-news/sept-news.component';
import { SeptSectorUnitiesComponent } from '../pages/sept-sector-unities/sept-sector-unities.component';
import { SeptSectorComponent } from '../pages/sept-sector/sept-sector.component';
import { SeptSystemsListComponent } from '../pages/sept-systems-list/sept-systems-list.component';
import { LuthieryOutletComponent } from './luthiery-outlet/luthiery-outlet.component';
import { SeptOutletComponent } from './sept-outlet/sept-outlet.component';

export const routes = [
  {
    path: '',
    component: SeptOutletComponent,
    children: [
      { path: '', component: SeptHomeComponent },
      { path: 'noticias', component: SeptNewsListComponent },
      { path: 'noticia', component: SeptNewsComponent },
      { path: 'historia', component: SeptHistoryComponent },
      { path: 'lista-sistemas', component: SeptSystemsListComponent },
      { path: 'setor', component: SeptSectorComponent },
      { path: 'corpo-docente', component: SeptFacultyComponent },
      { path: 'unidades-setor', component: SeptSectorUnitiesComponent },
      { path: 'colegiados', component: SeptCollegialComponent },
      { path: 'solicitacao-estagio', component: SeptInternshipFormComponent },
    ],
  },
  {
    path: 'luteria',
    component: LuthieryOutletComponent,
    children: [
      { path: '', component: LuthieryHomeComponent },
      { path: 'mimu', component: LuthieryMimuComponent },
      { path: 'colegiados', component: LuthieryFacultyComponent },
      {
        path: 'coordenacao',
        component: LuthieryCourseCoordinationComponent,
      },
      {
        path: 'espaco-estudante',
        component: LuthieryStudentSpaceComponent,
      },
    ],
  },
];
