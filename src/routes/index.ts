import { LuthieryCourseCoordinationComponent } from '../pages/luthiery-course-coordination/luthiery-course-coordination.component';
import { LuthieryFacultyComponent } from '../pages/luthiery-faculty/luthiery-faculty.component';
import { LuthieryStudentSpaceComponent } from '../pages/luthiery-student-space/luthiery-student-space.component';
import { SeptCollegialComponent } from '../pages/sept-collegial/sept-collegial.component';
import { SeptFacultyComponent } from '../pages/sept-faculty/sept-faculty.component';
import { SeptHistoryComponent } from '../pages/sept-history/sept-history.component';
import { SeptHomeComponent } from '../pages/sept-home/sept-home.component';
import { SeptSectorUnitiesComponent } from '../pages/sept-sector-unities/sept-sector-unities.component';
import { SeptSectorComponent } from '../pages/sept-sector/sept-sector.component';
import { SeptSystemsListComponent } from '../pages/sept-systems-list/sept-systems-list.component';

export const routes = [
  { path: '', component: SeptHomeComponent },
  { path: 'historia', component: SeptHistoryComponent },
  { path: 'lista-sistemas', component: SeptSystemsListComponent },
  { path: 'setor', component: SeptSectorComponent },
  { path: 'corpo-docente', component: SeptFacultyComponent },
  { path: 'unidades-setor', component: SeptSectorUnitiesComponent },
  { path: 'colegiados', component: SeptCollegialComponent },
  { path: 'luteria/colegiados', component: LuthieryFacultyComponent },
  { path: 'luteria/coordenacao', component: LuthieryCourseCoordinationComponent },
  { path: 'luteria/espaco-estudante', component: LuthieryStudentSpaceComponent },
];
