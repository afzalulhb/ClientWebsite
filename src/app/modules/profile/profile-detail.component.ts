import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';


import { Subscription } from 'rxjs/Subscription';


import { IAdvisor } from '../advisor/advisor';
import { IProfile } from './profile';
import { ProfileService } from './profile.service';


@Component({
    moduleId: module.id,
    selector: 'profile-detail',
    templateUrl:'profile-detail.component.html',
    styleUrls: [`profile-detail.component.css`],    
})
export class ProfileDetailComponent implements OnInit, OnDestroy{
     id : number;
     private sub: Subscription;
     profile: IProfile;
     accountant: IAdvisor;
     lawyer: IAdvisor;
     errorMessage: string;

    
     constructor(private _route: ActivatedRoute,
                 private _router: Router,
                 private _profileService: ProfileService){ }

    ngOnInit(): void{
         this.sub = this._route.params
         .switchMap((params: Params) => this._profileService.getProfile(+params['id']))
         .subscribe(profile => {
             this.profile = profile;
             this.accountant = profile.advisors.find(a => a.type=='Accountant');
             this.lawyer = profile.advisors.find(a => a.type=='Lawyer');
            });
    }
    ngOnDestroy() {
            this.sub.unsubscribe();
        }


}