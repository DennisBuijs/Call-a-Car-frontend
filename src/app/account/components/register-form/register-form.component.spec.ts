import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RegisterFormComponent} from './register-form.component';

describe('RegisterFormComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpClientTestingModule
            ],
            declarations: [
                RegisterFormComponent
            ],
        }).compileComponents();
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
});
