import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Task } from './task.model';
import { TaskService } from './task.service';

import { Principal } from '../shared';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    task: Task;
    tasks: Task[];
    currentAccount: any;

    constructor(
        private principal: Principal,
        private taskService: TaskService
    ) {
        this.task = new Task();
    }

    ngOnInit() {
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.loadAll();
    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
    }

    loadAll() {
        this.taskService.load().subscribe(
            (res: Task[]) => { this.tasks = res; },
            (res: Task[]) => console.log('load tasks error:' + JSON.stringify(res))
        );
    }

    addTask() {
        this.task.user = this.currentAccount;
        this.task.completed = false;
        this.subscribeToSaveResponse(
            this.taskService.create(this.task));
        this.task = new Task();
    }

    toggleCompletion(task: Task) {
        task.completed = ! task.completed;
        this.subscribeToSaveResponse(
            this.taskService.update(task));
    }

    isDoneClass(task: Task): String {
        return task.completed ? 'done' : '';
    }

    editTask(task: Task) {
        console.log('editTask');
    }

    remove(task: Task) {
        this.taskService.delete(task.id).subscribe((res) => {
            console.log('delete:' + JSON.stringify(res));
            this.loadAll();
        });
    }

    private subscribeToSaveResponse(result: Observable<Task>) {
        result.subscribe((res: Task) => { console.log('onSaveSuccess:' + JSON.stringify(res));
                this.loadAll(); },
            (res: Response) => console.log('onSaveError:' + JSON.stringify(res)));
    }
}
