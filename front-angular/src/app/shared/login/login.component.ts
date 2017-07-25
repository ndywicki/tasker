import { Component, AfterViewInit, Renderer, ElementRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { LoginService } from './login.service';

@Component({
    selector: 'app-login-modal',
    templateUrl: './login.component.html'
})
export class AppLoginModalComponent implements AfterViewInit {
    authenticationError: boolean;
    password: string;
    username: string;

    constructor(
        private loginService: LoginService,
        private elementRef: ElementRef,
        private renderer: Renderer,
        public activeModal: NgbActiveModal
    ) {
    }

    ngAfterViewInit() {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#username'), 'focus', []);
    }

    login() {
        this.loginService.login({
            username: this.username,
            password: this.password
        }).then(() => {
            this.authenticationError = false;
            this.activeModal.dismiss('login success');
        }).catch(() => {
            this.authenticationError = true;
        });
    }
}
