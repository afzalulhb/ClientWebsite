import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ResourceTabsetComponent } from './resource-tabset.component';
import { ResourceService } from './resource.service';
import { ResourceTabNewsletterComponent } from './resource-tab-newsletter.component';
import { ResourceTabPresentationComponent } from './resource-tab-presentation.component';
import { ResourceTabPlanningComponent } from './resource-tab-planning.component';
import { ResourceTabOtherComponent } from './resource-tab-other.component';
import { ResourceComponent } from './resource.component';



@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    ResourceTabsetComponent,
    ResourceTabNewsletterComponent,
    ResourceTabPresentationComponent,
    ResourceTabPlanningComponent,
    ResourceTabOtherComponent,
    ResourceComponent,
  ],
  providers: [
    ResourceService,
  ]
})
export class ResourceModule { }