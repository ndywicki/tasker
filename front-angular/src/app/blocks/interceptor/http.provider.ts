import { Http, XHRBackend, RequestOptions } from '@angular/http';
import { AppInterceptableHttp } from './interceptable-http';

import { AuthInterceptor } from './auth.interceptor';
import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';

export function interceptableFactory (
    backend: XHRBackend,
    defaultOptions: RequestOptions,
    localStorage: LocalStorageService,
    sessionStorage: SessionStorageService
) {
    return new AppInterceptableHttp(
        backend,
        defaultOptions,
        [
            new AuthInterceptor(localStorage, sessionStorage)
        ]
    );
}

export function customHttpProvider() {
    return {
        provide: Http,
        useFactory: interceptableFactory,
        deps: [
            XHRBackend,
            RequestOptions,
            LocalStorageService,
            SessionStorageService
        ]
    };
}
