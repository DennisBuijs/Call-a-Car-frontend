import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RegisterFormComponent} from './register-form.component';
import {AuthService} from '../../../core/services/auth.service';

describe('RegisterFormComponent', () => {

    let authServiceSpy: jasmine.SpyObj<AuthService>;

    beforeEach(async(() => {
        const registerSpy = jasmine.createSpyObj('AuthService', ['register']);

        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpClientTestingModule
            ],
            declarations: [
                RegisterFormComponent
            ],
            providers: [
                {
                    provide: AuthService,
                    useValue: registerSpy
                }
            ]
        }).compileComponents();

        authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    }));

    it(`should evaluate to valid`, () => {
        const fixture = TestBed.createComponent(RegisterFormComponent);
        const component = fixture.componentInstance;

        component.login = {
            username: '',
            password: 'wachtwoord1234',
            passwordCheck: 'wachtwoord1234'
        };

        const isPasswordValid = component.isPasswordValid();

        expect(isPasswordValid).toBeTrue();
    });

    it(`should evaluate to invalid`, () => {
        const fixture = TestBed.createComponent(RegisterFormComponent);
        const component = fixture.componentInstance;

        component.login = {
            username: '',
            password: 'wachtwoord1234',
            passwordCheck: 'wachtwoord0000'
        };

        const isPasswordValid = component.isPasswordValid();

        expect(isPasswordValid).toBeFalse();
    });

    it(`should not call 'register'`, () => {
        const fixture = TestBed.createComponent(RegisterFormComponent);
        const component = fixture.componentInstance;

        component.login = {
            username: '',
            password: 'wachtwoord1234',
            passwordCheck: 'wachtwoord0000'
        };

        expect(authServiceSpy.register).not.toHaveBeenCalled();
    });

    it(`should call 'register'`, () => {
        const fixture = TestBed.createComponent(RegisterFormComponent);
        const component = fixture.componentInstance;

        component.login = {
            username: '',
            password: 'wachtwoord1234',
            passwordCheck: 'wachtwoord1234'
        };

        component.onSubmit();

        expect(authServiceSpy.register).toHaveBeenCalled();
    });
});
