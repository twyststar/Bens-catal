import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { JobsComponent } from './jobs/jobs.component';
import { HousingComponent } from './housing/housing.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { ServicesComponent } from './services/services.component';
import { GigsComponent } from './gigs/gigs.component';

const appRoutes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'jobs',
    component: JobsComponent
  },
  {
    path: 'housing',
    component: HousingComponent
  },
  {
    path: 'for-sale',
    component: ForSaleComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'gigs',
    component: GigsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
