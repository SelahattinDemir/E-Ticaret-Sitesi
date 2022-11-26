import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { ApiService } from '../../Services/api.service';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-productsdetail',
  templateUrl: './productsdetail.component.html',
  styleUrls: ['./productsdetail.component.css']
})
export class ProductsdetailComponent implements OnInit, OnDestroy {

  private sub$: any;
  //for star template
  public star: number[] = [1, 2, 3, 4, 5];
  //public bc they will reached by template
  public productsDetail: any;
  public currentUrl!: string;
  private itemId: any;

  constructor(
    private route: ActivatedRoute, 
    private api: ApiService, 
    private cartService: CartService, 
    private toastr: ToastrService) { }

  ngOnInit(): void {
    //With paramMap you can route multiple page with only one template 
    this.itemId = Number(this.route.snapshot.paramMap.get("id"));
    this.currentUrl =`?id=${this.itemId}`;
    //For template view taking data from server 
    this.sub$ = this.api.filterApi(this.currentUrl).subscribe((res) => {
      this.productsDetail = res;
    })
  }

  //adding to cart from product detail page
  addtocart(item: any){
    this.cartService.addtoCart(item);
    this.toastr.success('Ürün Sepete Eklendi', 'Checkout');
  }

  ngOnDestroy(): void {
    this.sub$?.unsubscribe();
}
}
