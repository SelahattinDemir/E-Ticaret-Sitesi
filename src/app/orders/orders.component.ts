import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  
  public orders:any = [];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.ordersApi().subscribe(
      res=>{
      this.orders = res;
      console.log(this.orders); 
      }
    )
  }

}
