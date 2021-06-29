import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReserveFormComponent} from './components/reserve-form/reserve-form.component';
import {ReservationDetailsComponent} from './components/reservation-details/reservation-details.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: ReserveFormComponent
    },
    {
        path: 'overview/:reservationId',
        component: ReservationDetailsComponent
    }
];

@NgModule({
    declarations: [ReserveFormComponent, ReservationDetailsComponent],
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ]
})
export class ReserveModule {
}
