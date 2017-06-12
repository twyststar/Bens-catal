import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JobsComponent } from './jobs/jobs.component';
import { HousingComponent } from './housing/housing.component';
import { GigsComponent } from './gigs/gigs.component';
import { ServicesComponent } from './services/services.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { EditJobComponent } from './edit-job/edit-job.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    JobsComponent,
    HousingComponent,
    GigsComponent,
    ServicesComponent,
    ForSaleComponent,
    EditJobComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
