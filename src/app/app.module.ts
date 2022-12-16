import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsComponent } from './Pages/products/products.component';
import { HeaderComponent } from './Component/header/header.component';
import { ProductsdetailComponent } from './Pages/productsdetail/productsdetail.component';
import { ApiService } from './Services/api.service';
import { FilterHandlerPipe } from './filtered/filter-handler.pipe';
import { BasketComponent } from './Pages/basket/basket.component';
import { OrdersComponent } from './Pages/orders/orders.component';
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { FooterComponent } from './Component/footer/footer.component';
import { AdminDashboardComponent } from './Pages/admin-dashboard/admin-dashboard.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ErrorHandleInterceptor } from './interceptors/error.interceptor';
import { DialogComponent } from './Component/dialog/dialog.component';
import { ConfirmDialogComponent } from './Component/confirm-dialog/confirm-dialog.component';
import { FilterBarComponent } from './Component/filter-bar/filter-bar.component';
import { CommentsComponent } from './Component/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    ProductsdetailComponent,
    FilterHandlerPipe,
    BasketComponent,
    OrdersComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    AdminDashboardComponent,
    DialogComponent,
    ConfirmDialogComponent,
    FilterBarComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // View Modules (Toastr, Angular Metarial)
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [ApiService,
    {
      provide: 'apiUrl',
      useValue: 'https://demo.limantech.com/cards/public/api'
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: ErrorHandleInterceptor, 
      multi: true 
    }
  ],
  entryComponents: [ConfirmDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
