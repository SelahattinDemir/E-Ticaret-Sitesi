import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminDashboardComponent } from './Pages/admin-dashboard/admin-dashboard.component';
import { BasketComponent } from './Pages/basket/basket.component';
import { LoginComponent } from './Pages/login/login.component';
import { OrdersComponent } from './Pages/orders/orders.component';
import { ProductsComponent } from './Pages/products/products.component';
import { ProductsdetailComponent } from './Pages/productsdetail/productsdetail.component';
import { SignupComponent } from './Pages/signup/signup.component';

import { AdminGuard } from './Services/admin.guard.service';
import { AuthGuard } from './Services/auth.guard.service';
import { UnsavedGuard } from './Services/unsaved.guard.service';


//page routes for components with guards
const routes: Routes = [
  {path:'products', component: ProductsComponent, canActivate:[AuthGuard]},
  {path:'products/:id', component: ProductsdetailComponent, canActivate:[AuthGuard]},
  {path:'basket', component: BasketComponent, canActivate:[AuthGuard]},
  {path:'orders', component: OrdersComponent, canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:AdminDashboardComponent, canActivate:[AdminGuard],canDeactivate:[UnsavedGuard]},
  //Wildcard invalid routes and guard will be redirected to here 
  {path:'**', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
