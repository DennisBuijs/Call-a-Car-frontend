import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../../../core/services/auth.service';

@Component({
    selector: 'app-customer-data-form',
    templateUrl: './customer-data-form.component.html',
    styleUrls: ['./customer-data-form.component.scss']
})
export class CustomerDataFormComponent implements OnInit {

    customer$: Observable<any> = this.authService.auth$;

    constructor(private authService: AuthService) {
    }

    ngOnInit(): void {
    }

    onSubmit(customer: any): void {
        this.authService.updateCustomer(customer);
    }

}
