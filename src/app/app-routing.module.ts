import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { DocumentComponent }   from './modules/document/document.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { ResourceComponent } from './modules/resource/resource.component';
import { PortfolioComponent } from './modules/portfolio/portfolio.component';
import { ProfileDetailComponent } from './modules/profile/profile-detail.component';



const routes: Routes = [
      {
        path:'',
        redirectTo:'/document',
        pathMatch:'full', 
      },
      {
        path:'document',
        component: DocumentComponent
      },
      {
        path:'profile',
        component: ProfileComponent,
        children:[
          { path: '', component: ProfileDetailComponent},
          { path: 'details/:id', component: ProfileDetailComponent}
        ]
      },
      {
        path:'resource',
        component: ResourceComponent
      },
      {
        path:'portfolio',
        component: PortfolioComponent
      },
      
    ];

    @NgModule({
        imports: [ RouterModule.forRoot(routes) ],
        exports: [ RouterModule ]
    })
    export class AppRoutingModule{

    }