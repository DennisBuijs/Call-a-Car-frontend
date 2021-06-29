import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DataService} from '../../../core/services/data.service';

@Component({
    selector: 'app-order-history-list',
    templateUrl: './order-history-list.component.html',
    styleUrls: ['./order-history-list.component.scss']
})
export class OrderHistoryListComponent implements OnInit {

    orders$: Observable<any> = this.dataService.getOrders();

    constructor(private dataService: DataService) {
    }

    ngOnInit(): void {
    }

}
