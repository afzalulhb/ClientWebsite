import { Component, Input } from '@angular/core';


import { IResource } from './resource';



@Component({
    moduleId: module.id,
    selector: 'nwm-resource-tab-newsletter',
    templateUrl: 'resource-tab-newsletter.component.html',
    styleUrls: [`resource-tab-newsletter.component.css`]
})
export class ResourceTabNewsletterComponent{
    @Input() resources: IResource[];
    @Input()  resource: IResource;
    imageWidth: number = 32;
    imageMargin: number = 2;

}

 

   