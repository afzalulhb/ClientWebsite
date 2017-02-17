import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { Subscription } from 'rxjs/Subscription';


import { IAdvisor } from '../advisor/advisor';
import { IProfile } from './profile';
import { ProfileService } from './profile.service';

@Component({
    moduleId: module.id,
    selector:'nwm-profile',
    templateUrl: 'profile.component.html',
    styleUrls: [`profile.component.css`],
})
export class ProfileComponent implements OnInit, OnDestroy{
    profiles: IProfile[] = [];
    errorMessage: string;
    private sub: Subscription;

constructor(private _route: ActivatedRoute,
                 private _router: Router,
                 private _profileService: ProfileService){ }

    ngOnInit(): void{
        this.getProfiles();
        
    }
    ngOnDestroy() {
            this.sub.unsubscribe();
        }

    getProfiles():void{
          this.sub = this._profileService.getProfiles().subscribe(
           profiles =>this.profiles = profiles,
           error => this.errorMessage = <any>error);
    }

}