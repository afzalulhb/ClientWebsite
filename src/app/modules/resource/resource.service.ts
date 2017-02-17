import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';


import { IResource } from './resource';

@Injectable()
export class ResourceService {
    private resourcetUrl = 'api/resource/resource.json';

    constructor(private http: Http) { }

    getResources(): Observable<IResource[]>{
        return this.http.get(this.resourcetUrl)
            .map(response => <IResource[]> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }


   
    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error);
    }
}