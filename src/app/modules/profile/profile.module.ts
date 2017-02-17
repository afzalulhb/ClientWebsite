import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { ProfileComponent } from './profile.component';
import { ProfileDetailComponent } from './profile-detail.component';
import { ProfileService } from './profile.service';
import { PhoneListComponent } from './phone-list.component';
import { AddressListComponent } from './address-list.component';
import { ProfileAdvisorComponent } from './profile-advisor.component';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    ProfileDetailComponent,
    PhoneListComponent,
    AddressListComponent,
    ProfileAdvisorComponent,
    ProfileComponent,
  ],
  providers: [
    ProfileService,
  ]
})
export class ProfileModule { }