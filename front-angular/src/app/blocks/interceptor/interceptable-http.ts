import { AppHttpInterceptor } from './http.interceptor';
import { forwardRef, Inject, Injectable } from '@angular/core';
import { Http, ConnectionBackend, RequestOptions, RequestOptionsArgs, RequestMethod, Request, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppInterceptableHttp extends Http {
  private firstInterceptor: AppHttpInterceptor;

  constructor(
    backend: ConnectionBackend,
    defaultOptions: RequestOptions,
    @Inject(forwardRef(() => AppHttpInterceptor)) interceptors: AppHttpInterceptor[]
  ) {
    super(backend, defaultOptions);
    if (interceptors && interceptors.length > 0) {
      interceptors.reduce((chain, current) => {
        chain.successor = current;
        return current;
      });

      this.firstInterceptor = interceptors[0];
    }
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    // Response interceptor needs to be called only once after the final request here
    // Every HTTP method will go through this request method
    return this.interceptResponse(super.request(url, options));
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.get(url, this.interceptRequest(url, RequestMethod.Get, options));
  }

  post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.post(url, body, this.interceptRequest(url, RequestMethod.Post, options, body));
  }

  put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.put(url, body, this.interceptRequest(url, RequestMethod.Put, options, body));
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.delete(url, this.interceptRequest(url, RequestMethod.Delete, options));
  }

  patch(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.patch(url, body, this.interceptRequest(url, RequestMethod.Patch, options, body));
  }

  head(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.head(url, this.interceptRequest(url, RequestMethod.Head, options));
  }

  options(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.options(url, this.interceptRequest(url, RequestMethod.Options, options));
  }

  interceptRequest(url: string, method: RequestMethod, options?: RequestOptionsArgs, body?: any): RequestOptionsArgs {
    if (!options) {
      options = new RequestOptions();
    }

    if (!options.headers) {
      options.headers = new Headers();
    }

    options.url = options.url || url;
    options.method = options.method || method;
    options.body = options.body || body;

    return !this.firstInterceptor ? options : this.firstInterceptor.processRequestInterception(options);
  }

  interceptResponse(observable: Observable<Response>): Observable<Response> {
    return !this.firstInterceptor ? observable : this.firstInterceptor.processResponseInterception(observable);
  }
}
