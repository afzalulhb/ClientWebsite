import { Component, Input } from '@angular/core';

import { IAdvisor } from '../advisor/advisor';

@Component({
    moduleId: module.id,
    selector:'nwm-profile-advisor',
    templateUrl:'profile-advisor.component.html',
    styleUrls: [`profile-advisor.component.css`]
})
export class ProfileAdvisorComponent{
    @Input() advisor: IAdvisor;
}