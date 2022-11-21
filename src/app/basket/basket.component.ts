import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.services';
import { ApiService } from '../Services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  public cartItems: any = [];
  public grandTotal !: number;

  constructor(private cartService: CartService, private api:ApiService, private router: Router,) { }



  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.cartItems = res;
        this.grandTotal = this.cartService.getTotalPrice();
      });
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }



  checkout(){
    this.api.checkoutApi(this.cartItems).subscribe();
    this.cartService.removeAllCart();
    this.router.navigate(["orders"]);
  }
}

