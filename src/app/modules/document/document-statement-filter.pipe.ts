import { PipeTransform, Pipe } from '@angular/core';

import { IClientDocument } from './document-statement';


@Pipe({
    name:'statementFilter'
})
export class ClientDocumentFilterPipe implements PipeTransform{
    transform(value: IClientDocument[], filterBy: string){
        filterBy = filterBy? filterBy.toLocaleLowerCase() : null;
        return filterBy? value.filter((statement: IClientDocument) =>
        statement.fileName.toLocaleLowerCase().indexOf(filterBy) !==
        -1) : value;
    }
}
