import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  
  public orders: any = [];

  constructor(private api: ApiService) { }

  // taking orders from server
  ngOnInit(): void {
    this.api.ordersApi().subscribe(
      res => {
        this.orders = res;
      }
    )
  }
}
