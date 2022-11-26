import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

import { ApiService } from '../../Services/api.service';
import { CartService } from '../../Services/cart.service';
import { ProductfiltersService } from '../../Services/productfilters.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit, OnDestroy {
   
  private products: any;
  //For unsubcribing of subscriptions in ngDestroy taking subscriptions to a variable
  private sub1$: any;
  private sub2$: any;
  //var. for templates
  public star: number[] = [1, 2, 3, 4, 5]; 
  public filteredProducts: any;
  //Case (For using async pipe which automatically unsub. when component destroy)
  public searchKey$?: Observable<string>;
  public viewGrid: boolean = true;
  public uniqueBrands: any = [];

  constructor(
    private api: ApiService, 
    private cartService: CartService, 
    private router: Router, 
    private toastr: ToastrService, 
    private productFilters: ProductfiltersService) { }

  ngOnInit(): void {
    //getting product from server
    this.sub1$ = this.api.getAllProductApi().subscribe(res => {
      this.products = res;
      this.filteredProducts = res;
      //checking unique brands for same brand inputs from db 
      //so can display dynamically in brand filter
      this.products.forEach((element: any) => {
        return this.uniqueBrands.push(element.brand);
      });
    });
    // data transfer for search handling ( filter in subcribe not working so pipe is used)
    // async pipe usage case
    this.searchKey$ = this.cartService.search;
    this.sub2$ = this.productFilters.data.subscribe(
      (res) => (this.filteredProducts = res));
  }

  // Sending element id to product detail paramMap
  onSelect(item: any) {
    this.router.navigate(['/products', item.id]);
  }

  // adding item to cart
  addtocart(item: any){
    this.cartService.addtoCart(item);
    this.toastr.success('Ürün Sepete Eklendi ', 'Checkout');
  }

  //changing view style
  viewHandler(category: string) {
    if(category === 'grid') {
      this.viewGrid = true;
    }
    if(category === 'list'){
      this.viewGrid = false;
    }
  }

  //Unsubscribing to the subscriptions
  ngOnDestroy(): void {
    this.sub1$?.unsubscribe()
    this.sub2$?.unsubscribe()
  }
}