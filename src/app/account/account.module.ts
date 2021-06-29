import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountPageComponent} from './components/account-page/account-page.component';
import {RouterModule, Routes} from '@angular/router';
import {CustomerDataFormComponent} from './components/customer-data-form/customer-data-form.component';
import {OrderHistoryListComponent} from './components/order-history-list/order-history-list.component';
import {FormsModule} from '@angular/forms';
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {LoginFormComponent} from './components/login-form/login-form.component';

const routes: Routes = [
    {
        path: '',
        component: AccountPageComponent,
        children: [
            {
                path: '',
                redirectTo: 'details'
            },
            {
                path: 'details',
                component: CustomerDataFormComponent
            },
            {
                path: 'orders',
                component: OrderHistoryListComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginFormComponent
    },
    {
        path: 'register',
        component: RegisterFormComponent
    }
];

@NgModule({
    declarations: [AccountPageComponent, CustomerDataFormComponent, OrderHistoryListComponent, RegisterFormComponent, LoginFormComponent],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule
    ]
})
export class AccountModule {
}
