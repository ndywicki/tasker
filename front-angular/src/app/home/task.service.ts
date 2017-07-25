import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Task } from './task.model';

@Injectable()
export class TaskService {

    private apiBaseUrl = 'http://localhost:8080/';
    private resourceUrl = this.apiBaseUrl + 'api/tasks';

    constructor(private http: Http) { }

    load(): Observable<any> {
        return this.http.get(this.resourceUrl).map((res: Response) => {
            return res.json();
        });
    }

    create(task: Task): Observable<Task> {
        const copy = this.convert(task);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(task: Task): Observable<Task> {
        const copy = this.convert(task);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<Task> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            return res.json();
        });
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    private convert(task: Task): Task {
        const copy: Task = Object.assign({}, task);
        return copy;
    }
}
