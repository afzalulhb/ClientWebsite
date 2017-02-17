import { Component, Input } from '@angular/core';


import { IResource } from './resource';



@Component({
    moduleId: module.id,
    selector: 'nwm-resource-tab-presentation',
    templateUrl: 'resource-tab-presentation.component.html',
    styleUrls: [`resource-tab-presentation.component.css`]
})
export class ResourceTabPresentationComponent{
    @Input() resources: IResource[];
    @Input()  resource: IResource;
    imageWidth: number = 32;
    imageMargin: number = 2;

}

 

   