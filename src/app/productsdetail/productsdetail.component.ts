import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../Services/api.service';
import { CartService } from '../Services/card.services';

@Component({
  selector: 'app-productsdetail',
  templateUrl: './productsdetail.component.html',
  styleUrls: ['./productsdetail.component.css']
})
export class ProductsdetailComponent implements OnInit {

  public star: number[] = [1, 2, 3, 4, 5];
  public productsDetail: any;
  public currentId: any;

  constructor(private route:ActivatedRoute, private api:ApiService,private cartService:CartService) { }

  ngOnInit(): void {
//With paramMap you can route multiple page with only one template 
    let itemId=this.route.snapshot.paramMap.get("id");
    this.currentId=Number(itemId);
//For template view taking data from server
    this.api.getAllProductApi().subscribe(
      res=>{
        this.productsDetail=res;
    })
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }


}
