import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {
    TaskerSharedLibsModule,
    TaskerSharedCommonModule,
    AuthServerProvider,
    AccountService,
    LoginService,
    LoginModalService,
    Principal,
    AppLoginModalComponent
} from './';

@NgModule({
    imports: [
        TaskerSharedLibsModule,
        TaskerSharedCommonModule
    ],
    declarations: [
      AppLoginModalComponent
    ],
    providers: [
      LoginService,
      LoginModalService,
      AccountService,
      Principal,
      AuthServerProvider
    ],
    entryComponents: [AppLoginModalComponent],
    exports: [
        TaskerSharedCommonModule,
        AppLoginModalComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class TaskerSharedModule {}
