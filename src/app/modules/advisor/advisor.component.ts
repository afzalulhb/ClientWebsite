import { Component, OnInit } from '@angular/core';

import { IAdvisor } from './advisor'

@Component({
    moduleId: module.id,
    selector: 'nwm-advisors',
    template: `
    <div *ngIf='advisors && advisors.length' class="advisor">        
        <ul>
            <li><h4>My Advisory Team</h4></li>
            <li *ngFor='let advisor of advisors'>
                <b>{{advisor.advisorName}}</b><br>
                {{advisor.type}}
                <p>
                <a href="mailto:{{advisor.email}}">{{advisor.email}}</a>
                </p>
            </li>
        </ul> 
    </div>
    `,
    styles:[`
    li{
        padding-bottom:5px;
       list-style-type:none;
    }
    .advisor{
        padding:10px;
        border: 1px solid #fff;
        box-shadow:-3px 3px 3px #fff;
        max-width:295px;
    }
    
    `]
})
export class AdvisorComponent implements OnInit{
    advisors:IAdvisor[]=[];



    ngOnInit():void{
        this.getAdvisors();
    }

    getAdvisors():void{
        var advisorList:IAdvisor[] = [
            { id:1, advisorName:'Carolyn Shrimpton', type:'Financial Advisor', email:'cshrimpton@nicolawealth.com', phones:[]},
            { id:2, advisorName:'John Nicola', type:'Financial Advisor ', email:'jnicola@nicolawealth.com', phones:[]},
            { id:3, advisorName:'Jada Fleur-de-lys', type:'Financial Assistant', email:'jada@nicolawealth.com', phones:[]}
        ];

        this.advisors = advisorList;
    }
}
 
 






 


