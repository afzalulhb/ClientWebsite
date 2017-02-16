import { Component, OnInit }  from '@angular/core';

import { IMenu } from './menu';
//import { MenuService } from './menu.service'; //TO DO

@Component({
    moduleId: module.id,
    selector: 'nwm-menu',
    templateUrl:'menu.component.html',
    styleUrls: ['menu.component.css'],
    // templateUrl: 'app/menu/menu-list.component.html',
    // styleUrls: ['app/menu/menu-list.component.css']
})
export class MenuComponent implements OnInit {
    logoUrl: string = 'app/shared/images/logo.png';
    menus: IMenu[];
    // menus: IMenu[]= [
    //         { menuId:0, menuTitle:'MY FILES',menuLink:'#/', menuSelected:'true' },
    //         { menuId:1, menuTitle:'MY INFO',menuLink:'#/', menuSelected:'false' },
    //         { menuId:2, menuTitle:'RESOURCES',menuLink:'#/', menuSelected:'false' },
    //         { menuId:3, menuTitle:'MY PORTFOLIO',menuLink:'#/', menuSelected:'false' },
    //     ];

    // constructor(private _menuService: MenuService) {

    // }
   

    ngOnInit(): void {
        var menuList: IMenu[]= [            
            { menuId:0, menuTitle:'MY FILES',menuLink:'/document', menuSelected:'true' },
            { menuId:1, menuTitle:'MY INFO',menuLink:'/profile', menuSelected:'false' },
            { menuId:2, menuTitle:'RESOURCES',menuLink:'/resource', menuSelected:'false' },
            { menuId:3, menuTitle:'MY PORTFOLIO',menuLink:'/portfolio', menuSelected:'false' },
        ];
    this.menus = menuList;
    }
    
    public onClick(menu:IMenu){
        var menuList: IMenu[]=[];

        if(menu.menuSelected==='true') return;

        this.menus.forEach(element => {
            let retObj = { 
                menuId:element.menuId,
                menuLink: element.menuLink,
                menuTitle: element.menuTitle,               
                menuSelected: element.menuTitle === menu.menuTitle ? "true" : "false"
            };
            menuList.push(retObj);
        });
        this.menus = menuList;
    }
}
