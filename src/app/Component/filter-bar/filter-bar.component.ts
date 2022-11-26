import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/Services/api.service';
import { ProductfiltersService } from 'src/app/Services/productfilters.service';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {
  
  public uniqueBrands: any = [];
  private products: any;

  constructor( private productFilters: ProductfiltersService, private api: ApiService) { }

  ngOnInit(): void {
    this.api.getAllProductApi().subscribe(res => {
      this.products = res;
      //checking unique brands for same brand inputs from db 
      //so can display dynamically in brand filter
      this.products.forEach((element: any) => {
        return this.uniqueBrands.push(element.brand);
      });
    this.uniqueBrands = this.uniqueBrands.filter((item: any, 
      index: any) => this.uniqueBrands.indexOf(item) === index);
  });
}

  //Filtering operation events(handling by productfilter.service)
  categoryFilter(category: string) {
    this.productFilters.categoryFilterService(category);
  }

  priceFilter(min: any, max: any) {
    this.productFilters.priceFilterService(min, max);
  }

  brandFilter(brand: any) { 
    this.productFilters.brandFilterService(brand);
  }

  starFilter(star: any){
    this.productFilters.starFilterService(star);
  }

}
