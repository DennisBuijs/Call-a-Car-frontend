import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticatedWrapperComponent} from './core/components/authenticated-wrapper/authenticated-wrapper.component';

const routes: Routes = [
    // Authenticated
    {
        path: '',
        component: AuthenticatedWrapperComponent,
        children: [
            {
                path: 'reserve',
                loadChildren: () => import('./reserve/reserve.module').then(m => m.ReserveModule)
            },
            {
                path: 'account',
                loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
