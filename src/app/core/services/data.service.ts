import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private apiBase = environment.API_BASE;

    constructor(private http: HttpClient) {
    }

    public getOrders(): Observable<any> {
        return this.http.get(`${this.apiBase}/customer/order`);
    }

    public postOrder(body: {}): Observable<any> {
        return this.http.post(`${this.apiBase}/customer/order`, body);
    }

    public getCustomer(customerId: string): Observable<any> {
        return this.http.get(`${this.apiBase}/customer/${customerId}`);
    }

    public putCustomer(customer: any): Observable<any> {
        return this.http.put(`${this.apiBase}/customer/${customer.uuid}`, customer);
    }

    public signIn(body: {}): Observable<any> {
        return this.http.post(`${this.apiBase}/auth/signin`, body);
    }

    public register(body: {}): Observable<any> {
        return this.http.post(`${this.apiBase}/auth/register`, body);
    }
}
