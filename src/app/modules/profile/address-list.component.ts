import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    //address-list.component
    selector:'nwm-address-list',
    templateUrl:'address-list.component.html',
    styleUrls: [`address-list.component.css`]
    ,
})
export class AddressListComponent{
    @Input() addresses: IAddress[];
}