import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';

@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

    public login: {
        username: string,
        password: string,
        passwordCheck: string
    } = {
        username: null,
        password: null,
        passwordCheck: null
    };

    constructor(private authService: AuthService) {
    }

    ngOnInit(): void {
    }

    onSubmit(): void {
        if (this.isPasswordValid()) {
            this.authService.register(this.login.username, this.login.password);
        }
    }

    isPasswordValid(): boolean {
        if (this.login.password === this.login.passwordCheck) {
            return true;
        }

        return false;
    }

}
