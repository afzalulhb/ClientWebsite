import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector:'nwm-phone-list',
    templateUrl:'phone-list.component.html',
    styleUrls:[`phone-list.component.css`],

})
export class PhoneListComponent{
    @Input() phones: IPhone[];
}