import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';

import {
    TaskerSharedLibsModule
} from './';

@NgModule({
    imports: [
        TaskerSharedLibsModule
    ],
    declarations: [
    ],
    providers: [
        Title
    ],
    exports: [
        TaskerSharedLibsModule
    ]
})
export class TaskerSharedCommonModule {}
