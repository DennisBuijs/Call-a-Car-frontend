import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

    public login: {
        username: null,
        password: null
    } = {
        username: null,
        password: null
    };

    constructor(private authService: AuthService) {
    }

    ngOnInit(): void {
    }

    onLogin(): void {
        this.authService.signIn(this.login.username, this.login.password);
    }
}
