import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Params } from '@angular/router';

type HttpMethod = 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get(path: string, params?: Params): Observable<any> {
    return this.request('GET', path, params);
  }

  post(path: string, body: any, params?: Params): Observable<any> {
    return this.request('POST', path, params, body);
  }

  put(path: string, body: any, params?: Params): Observable<any> {
    return this.request('PUT', path, params, body);
  }

  delete(path: string, body: any, params?: Params): Observable<any> {
    return this.request('DELETE', path, params, body);
  }

  patch(path: string, body: any, params?: Params): Observable<any> {
    return this.request('PATCH', path, params, body);
  }

  private request(
    method: HttpMethod,
    path: string,
    params?: Params,
    body?: any,
    headers?: any
  ) {
    return this.http
      .request(method, `${environment.api}${path}`, {
        params,
        body,
        headers,
      })
      .pipe(
        map(
          (res) => res,
          (err) => err
        )
      );
  }
}
