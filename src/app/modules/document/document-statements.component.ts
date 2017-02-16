import { Component, OnInit, Input } from '@angular/core';

import { IClientDocument } from './document-statement';

@Component({
    moduleId: module.id,
    selector:'document-statements',
    templateUrl:'./document-statements.component.html',
    styleUrls: [`./document-statements.component.css`]

})
export class DocumentStatementsComponent implements OnInit{
    @Input() tabId:number;
    documentStatements: IClientDocument[] = [];
    imageWidth: number = 32;
    imageMargin: number = 2;
    listFilter:string;
    allChecked: boolean = false;


    ngOnInit() : void{
     var statementList : IClientDocument[] = this.getClientDocumentList(this.tabId);        
        this.documentStatements = statementList;
    }


    chkSelectAll():void{
        var toggleTrue:boolean = !this.allChecked;
        
        this.documentStatements.forEach((item:IClientDocument)=>{
                item.isChecked = toggleTrue;
            });
        this.allChecked = toggleTrue;
    }

    chkSingleSelect():void{
        var toggleTrue:boolean = true;        
       
        this.documentStatements.forEach((item:IClientDocument)=>{
                toggleTrue = toggleTrue && item.isChecked;
            });
        
        this.allChecked = toggleTrue;
    }

    getClientDocumentList(tabId:number):IClientDocument[]{
        var statementList : IClientDocument[]=[];
        switch(tabId){
            case 1:
                statementList =[
                    {id:1,clientId:123456, path:'c:\\temp\\', fileName:'Year-To-Date Rate-of-Return Statement',fileTypeId:1,fileTypeImgUrl:'app/shared/images/pdf.png',statementDate:'Dec 31, 2016',isChecked:false},
                    {id:2,clientId:123456, path:'c:\\temp\\', fileName:'Smith, John Holdings Statement',fileTypeId:1,fileTypeImgUrl:'app/shared/images/pdf.png',statementDate:'Dec 31, 2016',isChecked:true},
                    {id:3,clientId:123456, path:'c:\\temp\\', fileName:'YTD ROR',fileTypeId:1, fileTypeImgUrl:'app/shared/images/pdf.png',statementDate:'Dec 31, 2016',isChecked:false},
                    {id:4,clientId:123456, path:'c:\\temp\\', fileName:'Year-To-Date Rate-of-Return Statement',fileTypeId:1,fileTypeImgUrl:'app/shared/images/pdf.png',statementDate:'Dec 31, 2016',isChecked:false},
                    {id:5,clientId:123456, path:'c:\\temp\\', fileName:'Smith, John Holdings Statement',fileTypeId:1,fileTypeImgUrl:'app/shared/images/pdf.png',statementDate:'Dec 31, 2016',isChecked:false},
                    {id:6,clientId:123456, path:'c:\\temp\\', fileName:'YTD ROR',fileTypeId:1,fileTypeImgUrl:'app/shared/images/pdf.png',statementDate:'Dec 31, 2016',isChecked:false},
                    {id:7,clientId:123456, path:'c:\\temp\\',fileName:'Year-To-Date Rate-of-Return Statement',fileTypeId:1,fileTypeImgUrl:'app/shared/images/pdf.png',statementDate:'Dec 31, 2016',isChecked:false},
                    {id:8,clientId:123456, path:'c:\\temp\\',fileName:'Smith, John Holdings Statement',fileTypeId:1,fileTypeImgUrl:'app/shared/images/pdf.png',statementDate:'Dec 31, 2016',isChecked:false},
                    {id:9,clientId:123456, path:'c:\\temp\\',fileName:'YTD ROR',fileTypeId:1,fileTypeImgUrl:'app/shared/images/pdf.png',statementDate:'Dec 31, 2016',isChecked:false},
                    {id:10,clientId:123456, path:'c:\\temp\\',fileName:'Year-To-Date Rate-of-Return Statement',fileTypeId:1,fileTypeImgUrl:'app/shared/images/pdf.png',statementDate:'Dec 31, 2016',isChecked:false},
                    {id:11,clientId:123456, path:'c:\\temp\\',fileName:'Smith, John Holdings Statement',fileTypeId:1,fileTypeImgUrl:'app/shared/images/pdf.png',statementDate:'Dec 31, 2016',isChecked:false},
                    {id:12,clientId:123456, path:'c:\\temp\\',fileName:'YTD ROR',fileTypeId:1,fileTypeImgUrl:'app/shared/images/pdf.png',statementDate:'Dec 31, 2016',isChecked:false},
                    ];  
                break;
            case 2:            
                statementList =[
                    {id:1,clientId:123456, path:'c:\\temp\\', fileName:'Zipped Planning Documents',fileTypeId:2,fileTypeImgUrl:'app/shared/images/zip.png',statementDate:'Dec 31, 2016',isChecked:false},
                    {id:2,clientId:123456, path:'c:\\temp\\', fileName:'Ppt file',fileTypeId:3,fileTypeImgUrl:'app/shared/images/ppt.png',statementDate:'Dec 31, 2016',isChecked:true},
                    {id:3,clientId:123456, path:'c:\\temp\\', fileName:'C_FilesSmith, John2016-07-28 Jay Dargatz - Financial Planning WorkbookXLSX',fileTypeId:4, fileTypeImgUrl:'app/shared/images/excel.png',statementDate:'Dec 31, 2016',isChecked:false},
                    ];
                break;
            case 3:
                statementList =[
                    {id:1,clientId:123456, path:'c:\\temp\\', fileName:'Zipped Tax Information',fileTypeId:2,fileTypeImgUrl:'app/shared/images/zip.png',statementDate:'Dec 31, 2016',isChecked:false},
                    {id:2,clientId:123456, path:'c:\\temp\\', fileName:'Smith, John - T1 General 2007',fileTypeId:1,fileTypeImgUrl:'app/shared/images/pdf.png',statementDate:'Dec 31, 2016',isChecked:true},
                    {id:3,clientId:123456, path:'c:\\temp\\', fileName:'Smith, Jane - T1 General 2007',fileTypeId:1, fileTypeImgUrl:'app/shared/images/pdf.png',statementDate:'Dec 31, 2016',isChecked:false},
                    {id:4,clientId:123456, path:'c:\\temp\\', fileName:'Dr. John W. Smith Inc. - Financial Statements',fileTypeId:1,fileTypeImgUrl:'app/shared/images/pdf.png',statementDate:'Dec 31, 2016',isChecked:false},
                     ];
                break;
            case 4:
                statementList =[
                    {id:1,clientId:123456, path:'c:\\temp\\', fileName:'Dr. John W. Smith Inc. - Certificate of Incorporation',fileTypeId:1,fileTypeImgUrl:'app/shared/images/pdf.png',statementDate:'Dec 31, 2016',isChecked:false},
                    {id:2,clientId:123456, path:'c:\\temp\\', fileName:'Smith, John - Will',fileTypeId:1,fileTypeImgUrl:'app/shared/images/pdf.png',statementDate:'Dec 31, 2016',isChecked:true},
                   ];
                break;
            default:
            statementList =[
                {id:1,clientId:123456, path:'c:\\temp\\', fileName:'Year-To-Date Rate-of-Return Statement',fileTypeId:1,fileTypeImgUrl:'app/shared/images/pdf.png',statementDate:'Dec 31, 2016',isChecked:false},
                {id:2,clientId:123456, path:'c:\\temp\\', fileName:'Smith, John Holdings Statement',fileTypeId:1,fileTypeImgUrl:'app/shared/images/pdf.png',statementDate:'Dec 31, 2016',isChecked:true},
                {id:3,clientId:123456, path:'c:\\temp\\', fileName:'YTD ROR',fileTypeId:1, fileTypeImgUrl:'app/shared/images/pdf.png',statementDate:'Dec 31, 2016',isChecked:false},
                {id:4,clientId:123456, path:'c:\\temp\\', fileName:'Year-To-Date Rate-of-Return Statement',fileTypeId:1,fileTypeImgUrl:'app/shared/images/pdf.png',statementDate:'Dec 31, 2016',isChecked:false},
                {id:5,clientId:123456, path:'c:\\temp\\', fileName:'Smith, John Holdings Statement',fileTypeId:1,fileTypeImgUrl:'app/shared/images/pdf.png',statementDate:'Dec 31, 2016',isChecked:false},
                {id:6,clientId:123456, path:'c:\\temp\\', fileName:'YTD ROR',fileTypeId:1,fileTypeImgUrl:'app/shared/images/pdf.png',statementDate:'Dec 31, 2016',isChecked:false},
                {id:7,clientId:123456, path:'c:\\temp\\',fileName:'Year-To-Date Rate-of-Return Statement',fileTypeId:1,fileTypeImgUrl:'app/shared/images/pdf.png',statementDate:'Dec 31, 2016',isChecked:false},
                {id:8,clientId:123456, path:'c:\\temp\\',fileName:'Smith, John Holdings Statement',fileTypeId:1,fileTypeImgUrl:'app/shared/images/pdf.png',statementDate:'Dec 31, 2016',isChecked:false},
                {id:9,clientId:123456, path:'c:\\temp\\',fileName:'YTD ROR',fileTypeId:1,fileTypeImgUrl:'app/shared/images/pdf.png',statementDate:'Dec 31, 2016',isChecked:false},
                {id:10,clientId:123456, path:'c:\\temp\\',fileName:'Year-To-Date Rate-of-Return Statement',fileTypeId:1,fileTypeImgUrl:'app/shared/images/pdf.png',statementDate:'Dec 31, 2016',isChecked:false},
                {id:11,clientId:123456, path:'c:\\temp\\',fileName:'Smith, John Holdings Statement',fileTypeId:1,fileTypeImgUrl:'app/shared/images/pdf.png',statementDate:'Dec 31, 2016',isChecked:false},
                {id:12,clientId:123456, path:'c:\\temp\\',fileName:'YTD ROR',fileTypeId:1,fileTypeImgUrl:'app/shared/images/pdf.png',statementDate:'Dec 31, 2016',isChecked:false},
                ];
        }
        return statementList;
    }
    
}