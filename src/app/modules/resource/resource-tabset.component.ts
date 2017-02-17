import {Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';


import { IResource } from './resource';
import { ResourceService } from './resource.service';


const RESOURCE_TAB_NEWSLETTER:number =1;
const RESOURCE_TAB_PRESENTATION:number =2;
const RESOURCE_TAB_PLANNING:number =3;
const RESOURCE_TAB_OTHER:number =4;


@Component({
    moduleId: module.id,
    selector: 'nwm-resource-tabset',
    templateUrl: 'resource-tabset.component.html',
    styleUrls:['resource-tabset.component.css']
})
export class ResourceTabsetComponent implements OnInit {
    private newsletterResource: IResource;
    private presentationResource: IResource;
    private newsletterResources: IResource[];
    private presentationResources: IResource[];
    private planningResources: IResource[];
    private otherResources: IResource[];
 
    constructor(private _resourceService: ResourceService){}
    ngOnInit(): void{
        this.getResources();
    }

    getResources():void{
          this._resourceService.getResources()
          .subscribe(resources => {
              this.newsletterResource = (resources.filter(r => r.resourceType ===RESOURCE_TAB_NEWSLETTER))[0];
              this.presentationResource = (resources.filter(r => r.resourceType ===RESOURCE_TAB_PRESENTATION))[0];
              this.newsletterResources = resources.filter(r => r.resourceType ===RESOURCE_TAB_NEWSLETTER);
              this.presentationResources = resources.filter(r => r.resourceType ===RESOURCE_TAB_PRESENTATION);
              this.planningResources = resources.filter(r => r.resourceType ===RESOURCE_TAB_PLANNING);
              this.otherResources = resources.filter(r => r.resourceType ===RESOURCE_TAB_OTHER);
          })
    }
 }