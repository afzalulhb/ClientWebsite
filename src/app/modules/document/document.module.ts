import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { DocumentComponent }  from './document.component';
import { DocumentTabsetComponent } from './document-tabset.component';
import { DocumentStatementsComponent } from './document-statements.component';
import { ClientDocumentFilterPipe } from './document-statement-filter.pipe';

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
    NgbModule.forRoot(),
    ],
    declarations:[
    DocumentComponent,
    DocumentTabsetComponent,
    DocumentStatementsComponent,
    ClientDocumentFilterPipe,
    ],
    providers:[]
})
export class DocumentModule{}