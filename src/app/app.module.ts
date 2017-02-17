import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module'


import { AppComponent }  from './app.component';
import { LoginComponent }  from './modules/login/login.component';
import { MenuComponent }  from './modules/menu/menu.component';
import { FooterComponent }  from './modules/footer/footer.component';

import { DocumentModule } from './modules/document/document.module';
import { ProfileModule } from './modules/profile/profile.module';
import { ResourceModule } from './modules/resource/resource.module';
import { PortfolioComponent } from './modules/portfolio/portfolio.component';
import { AdvisorComponent } from './modules/advisor/advisor.component';



@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    JsonpModule,
    DocumentModule,
    ProfileModule,
    ResourceModule,
    ],
  declarations: [ 
    AppComponent ,
    LoginComponent,
    MenuComponent,
    //MenuListComponent,
    FooterComponent,
    PortfolioComponent,
    AdvisorComponent,
    ],
    providers:
    [
      
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
