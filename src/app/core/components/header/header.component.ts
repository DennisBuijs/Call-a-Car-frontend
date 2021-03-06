import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    customer$: Observable<any> = this.authService.auth$;

    constructor(private authService: AuthService) {
    }

    ngOnInit(): void {
    }

}
