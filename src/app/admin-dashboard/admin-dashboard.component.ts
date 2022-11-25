import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

import { ApiService } from '../Services/api.service';
import { DialogComponent } from '../dialog/dialog.component';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  //metarial table properties
  displayedColumns: string[] = ['id', 'title', 'brand', 'price','description','category','image','star','action'];
  dataSource!: MatTableDataSource<any>;
  //for reaching dom element of paginator and sort template
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  //data deposit for canexit() 
  private dialogformvalue: any = {};

  constructor(public dialog: MatDialog, private api: ApiService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getItem();
  }

  openDialog() {
    this.dialog.open(DialogComponent, { width:"50%" }).afterClosed().subscribe((resp:string) => {
      this.dialogformvalue = resp;
      //refreshing table after operation
      this.getItem();
     })
  }

  // getting data for table and setting interface values for metarial pagination and sorting 
  getItem(){
    this.api.getItemApi()
      .subscribe((res: any) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
  }

  //readymade filter from metarial table
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  //opening dialog section for editing item
  editItem(row: any){
    this.dialog.open(DialogComponent, { width:'50%', data:row }).afterClosed().subscribe((resp: string) => {
      //getting close response from dialog for guard 
      this.dialogformvalue = resp;
      //refreshing table after operation
      this.getItem();
    })
  }

  deleteItem(id: number){
    //Confirmation dialog before delete operation
    const message = `Bu öğeyi silmek istediğinizden emin misiniz?`;
    const dialogData = new ConfirmDialogModel("Confirm Action", message);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if(dialogResult) {
        this.api.deleteItemApi(id).subscribe(res =>
          this.getItem()
        )
      }
    });
  } 

  // guard method values came from dialog component close methods
  canExit(): boolean {
    if(this.dialogformvalue.touched && this.dialogformvalue.pristine || this.dialogformvalue.touched && this.dialogformvalue.invalid){
      this.toastr.error('Kaydedilmemiş Değişiklikler', 'Error')
      if(confirm("Kaydedilmemiş bazı değişiklikler var")){
        return true;
      }
      return false;

    }
    return true;
  }

  // NG metarial dialog components automatically unsub. when closed

}
