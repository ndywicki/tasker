import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2Webstorage } from 'ng2-webstorage';

import { TaskerHomeModule } from './home/home.module';
import { TaskerSharedModule } from './shared';
import { customHttpProvider } from './blocks/interceptor/http.provider';

import {
  AppMainComponent,
  LayoutRoutingModule,
  NavbarComponent
} from './layouts';

@NgModule({
  imports: [
    BrowserModule,
    LayoutRoutingModule,
    Ng2Webstorage.forRoot({ prefix: 'app', separator: '-'}),
    TaskerSharedModule,
    TaskerHomeModule
  ],
  declarations: [
    AppMainComponent,
    NavbarComponent
  ],
  providers: [
    customHttpProvider()
  ],
  bootstrap: [AppMainComponent]
})
export class AppModule { }
