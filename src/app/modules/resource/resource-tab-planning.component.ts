import { Component, Input } from '@angular/core';


import { IResource } from './resource';



@Component({
    moduleId: module.id,
    selector: 'nwm-resource-tab-planning',
    templateUrl: 'resource-tab-planning.component.html',
    styleUrls: [`resource-tab-planning.component.css`]
})
export class ResourceTabPlanningComponent{
    @Input() resources: IResource[];
    imageWidth: number = 32;
    imageMargin: number = 2;
}

 

   