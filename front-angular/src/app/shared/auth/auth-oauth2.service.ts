import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { LocalStorageService } from 'ng2-webstorage';

@Injectable()
export class AuthServerProvider {
    private apiBaseUrl = 'http://localhost:8080/';
    constructor(
        private http: Http,
        private $localStorage: LocalStorageService
    ) {}

    login(credentials): Observable<any> {
        const data = 'username=' +  encodeURIComponent(credentials.username) + '&password=' +
            encodeURIComponent(credentials.password) + '&grant_type=password&scope=read%20write&' +
            'client_secret=tasker-secret-token&client_id=taskerapp';
        const headers = new Headers ({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'Authorization': 'Basic ' + btoa('taskerapp' + ':' + 'my-secret-token-to-change-in-production')
        });

        return this.http.post(this.apiBaseUrl + 'oauth/token', data, {
            headers
        }).map(authSuccess.bind(this));

        function authSuccess(resp) {
            const response = resp.json();
            const expiredAt = new Date();
            expiredAt.setSeconds(expiredAt.getSeconds() + response.expires_in);
            response.expires_at = expiredAt.getTime();
            this.$localStorage.store('authenticationToken', response);
            return response;
        }
    }

    logout(): Observable<any> {
        return new Observable((observer) => {
            this.http.post(this.apiBaseUrl + 'api/logout', {});
            this.$localStorage.clear('authenticationToken');
            observer.complete();
        });
    }
}
