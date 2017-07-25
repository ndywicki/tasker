import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TaskerSharedModule } from '../shared';

import { HOME_ROUTE, HomeComponent, TaskService } from './';


@NgModule({
    imports: [
        TaskerSharedModule,
        RouterModule.forRoot([ HOME_ROUTE ], { useHash: true })
    ],
    declarations: [
        HomeComponent,
    ],
    entryComponents: [
    ],
    providers: [
        TaskService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TaskerHomeModule {}
