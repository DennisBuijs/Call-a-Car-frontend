import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../../../core/services/auth.service';
import {filter, tap} from 'rxjs/operators';
import {DataService} from '../../../core/services/data.service';

@Component({
    selector: 'app-reserve-form',
    templateUrl: './reserve-form.component.html',
    styleUrls: ['./reserve-form.component.scss']
})
export class ReserveFormComponent implements OnInit {

    public address: any = null;
    public dateTime: any = null;

    private customerId: string = null;
    private customerAddress: any = null;

    customer$: Observable<any> = this.authService.auth$.pipe(
        filter(value => !!value),
        tap(customer => {
            this.customerId = customer.uuid;
            this.customerAddress = customer.address;
        })
    );

    constructor(private authService: AuthService, private dataService: DataService) {
    }

    ngOnInit(): void {
    }

    onMyAddressSelect(): void {
        this.address = this.customerAddress;
    }

    onSubmit(): void {
        this.dataService.postOrder({
            customer_uuid: this.customerId,
            address_start_at_uuid: this.address.uuid
        }).subscribe(response => {
            console.log(response);
        });
    }

    isDateTimeValid(): boolean {
        if (this.dateTime > new Date()) {
            return true;
        }

        return false;
    }

}
