import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ReserveFormComponent} from './reserve-form.component';

describe('ReserveFormComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpClientTestingModule
            ],
            declarations: [
                ReserveFormComponent
            ],
        }).compileComponents();
    }));

    it(`should evaluate to valid`, () => {
        const fixture = TestBed.createComponent(ReserveFormComponent);
        const component = fixture.componentInstance;

        const date = new Date(new Date());
        date.setDate(date.getDate() + 1);

        component.dateTime = date;

        const isDateTimeValid = component.isDateTimeValid();

        expect(isDateTimeValid).toBeTrue();
    });

    it(`should evaluate to invalid`, () => {
        const fixture = TestBed.createComponent(ReserveFormComponent);
        const component = fixture.componentInstance;

        const date = new Date(new Date());
        date.setDate(date.getDate() - 1);

        component.dateTime = date;

        const isDateTimeValid = component.isDateTimeValid();

        expect(isDateTimeValid).toBeFalse();
    });

    // it(`should show the date input`, () => {
    //     const fixture = TestBed.createComponent(ReserveFormComponent);
    //     const component = fixture.componentInstance;
    //
    //     component.customer$ = of({});
    //     component.address = {};
    //     const datePicker = document.querySelector('input[type=datetime-local]');
    //
    //
    //     expect(datePicker).toBeTruthy();
    // });
});
