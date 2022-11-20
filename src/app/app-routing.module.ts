import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductsdetailComponent } from './productsdetail/productsdetail.component';
//page routes for components
const routes: Routes = [
  {path:'products', component: ProductsComponent},
  {path:'products/:id', component: ProductsdetailComponent}
  //Wildcard invalid routes and guard will be redirected to here 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
