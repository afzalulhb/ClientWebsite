import { Component, Input } from '@angular/core';


import { IResource } from './resource';



@Component({
    moduleId: module.id,
    selector: 'nwm-resource-tab-other',
    templateUrl: 'resource-tab-other.component.html',
    styleUrls: [`resource-tab-other.component.css`]
})
export class ResourceTabOtherComponent{
    @Input() resources: IResource[];
    imageWidth: number = 32;
    imageMargin: number = 2;

}

 

   