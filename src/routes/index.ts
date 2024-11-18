import { SeptHistoryComponent } from '../pages/sept-history/sept-history.component';
import { SeptHomeComponent } from '../pages/sept-home/sept-home.component';
import { SeptSectorComponent } from '../pages/sept-sector/sept-sector.component';
import { SeptSystemsListComponent } from '../pages/sept-systems-list/sept-systems-list.component';

export const routes = [
  { path: '', component: SeptHomeComponent },
  { path: 'historia', component: SeptHistoryComponent },
  { path: 'lista-sistemas', component: SeptSystemsListComponent },
  { path: 'setor', component: SeptSectorComponent },
];
