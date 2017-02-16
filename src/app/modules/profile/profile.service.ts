import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { IProfile } from './profile';

@Injectable()
export class ProfileService {
    private _profileUrl = 'api/profile/profile.json';

    constructor(private _http: Http) { }

    getProfiles(): Observable<IProfile[]> {
        return this._http.get(this._profileUrl)
            .map((response: Response) => <IProfile[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getProfile(id: number): Observable<IProfile> {
        return this.getProfiles()
            .map((profiles: IProfile[]) => profiles.find(p => p.id === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
