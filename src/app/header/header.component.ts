import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/card.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem : number = 0;
  public isLoggedIn:boolean=false;
  constructor(private cartService : CartService) { }



  ngOnInit(): void {
    //taking data for template of total cart item number
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }


}
