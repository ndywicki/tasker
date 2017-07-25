import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { Principal, LoginModalService, LoginService } from '../../shared';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {
    isNavbarCollapsed: boolean;
    modalRef: NgbModalRef;

    constructor(
        private loginService: LoginService,
        private principal: Principal,
        private loginModalService: LoginModalService,
        private router: Router
    ) {
        this.isNavbarCollapsed = true;
    }

    collapseNavbar() {
        this.isNavbarCollapsed = true;
    }

    isAuthenticated() {
      return this.principal.isAuthenticated();
    }

    login() {
      this.modalRef = this.loginModalService.open();
    }

    logout() {
        console.log('logout');
        this.collapseNavbar();
        this.loginService.logout();
        this.router.navigate(['']);
    }

    toggleNavbar() {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
    }

    getUserFirstname() {
        return this.isAuthenticated() ? this.principal.getUserFirstname() : null;
    }

}
