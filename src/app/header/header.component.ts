import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem : number = 0;
  public searchTerm: string = "";
  public user:any;

  constructor(private cartService : CartService, private apiservice:ApiService) { }

  ngOnInit(): void {
    // checking user for logout template
    this.apiservice.user.subscribe((res) => {
      this.user = res;
    })
    //taking data for template of total cart item number
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }

  //checking ınput to search
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

  // clearing local storage for guard and isloggedin for logout button
  logout(){
    this.apiservice.user.next("")
    localStorage.clear()
  }
}
