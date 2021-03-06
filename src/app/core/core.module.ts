import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {AuthenticatedWrapperComponent} from './components/authenticated-wrapper/authenticated-wrapper.component';
import {RouterModule} from '@angular/router';
import {UnauthenticatedWrapperComponent} from './components/unauthenticated-wrapper/unauthenticated-wrapper.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
    declarations: [HeaderComponent, AuthenticatedWrapperComponent, UnauthenticatedWrapperComponent],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule
    ]
})
export class CoreModule {
}
