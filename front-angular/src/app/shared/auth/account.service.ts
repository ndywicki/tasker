import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AccountService  {
    private apiBaseUrl = 'http://localhost:8080/';

    constructor(private http: Http) { }

    get(): Observable<any> {
        return this.http.get(this.apiBaseUrl + 'api/account').map((res: Response) => res.json());
    }
}
