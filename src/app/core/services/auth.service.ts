import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';
import {DataService} from './data.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private authBs: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    auth$: Observable<any> = this.authBs.asObservable();

    private jwtHelper = new JwtHelperService();

    constructor(private dataService: DataService, private router: Router) {
    }

    public checkToken(): void {
        if (localStorage.getItem('call_a_car_token')) {
            const decodedToken = this.jwtHelper.decodeToken(localStorage.getItem('call_a_car_token'));

            this.setAuthCustomer(decodedToken.customer_uuid);
        }
    }

    public signIn(username: string, password: string): void {
        const body = {
            username,
            password: btoa(password)
        };

        this.dataService.signIn(body).subscribe(response => {
            if (response.token) {
                localStorage.setItem('call_a_car_token', response.token);

                this.authBs.next(response.customer);

                this.router.navigate(['/account']);
            }
        });
    }

    public register(username: string, password: string): void {
        const body = {
            username,
            password: btoa(password)
        };

        this.dataService.register(body).subscribe(response => {
            if (response.token) {
                localStorage.setItem('call_a_car_token', response.token);

                this.authBs.next(response.customer);

                this.router.navigate(['/account']);
            }
        });
    }

    public updateCustomer(customer: any): void {
        this.dataService.putCustomer(customer).subscribe(response => {
            this.authBs.next(response);
        });
    }

    public setAuthCustomer(customerId: string): void {
        this.dataService.getCustomer(customerId).subscribe(customer => {
            this.authBs.next(customer);
        });
    }

    public getToken(): string {
        if (localStorage.getItem('call_a_car_token')) {
            return localStorage.getItem('call_a_car_token');
        }

        return null;
    }

    public getCustomerId(): string {
        const customer = this.authBs.getValue();
        return customer?.id;
    }

}
