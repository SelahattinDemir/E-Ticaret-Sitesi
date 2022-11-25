import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  formValue!: FormGroup;
  item: any = {};
  itemData: any;
  actionButton: string = "Ekle";
  
  constructor(private api: ApiService, private formBuilder: FormBuilder, private toastr: ToastrService, private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public row:any) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      title: ['', Validators.required],
      brand: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern(/[0-9]/)]],
      description: ['', Validators.required],
      category: ['', Validators.required],
      image: ['', [Validators.required, Validators.pattern(/https?:\/\//)]],
      star: [0],
      comment: ['']
    })

    if(this.row){
      this.actionButton = "Güncelle"
       this.formValue.controls['title'].setValue(this.row.title)
       this.formValue.controls['brand'].setValue(this.row.brand)
       this.formValue.controls['price'].setValue(this.row.price)
       this.formValue.controls['description'].setValue(this.row.description)
       this.formValue.controls['category'].setValue(this.row.category)
       this.formValue.controls['image'].setValue(this.row.image)
    }
  }

  postItem() {
    if(!this.row){
     if(this.formValue.value){
       this.api.postItemApi(this.formValue.value)
       .subscribe(res => {
         this.formValue.reset();
         this.dialogRef.close();
         this.toastr.success('Ürün Eklendi', 'Success');
       })
      }
     else{
       this.toastr.error('Form Değerleri Geçerli Değil', 'Error');
       this.dialogRef.close(this.formValue);
     }
    }
    else{
      this.updateItem();
    }
   }
   
   updateItem(){
     if(this.formValue.valid){
       this.api.updateItemApi(this.formValue.value, this.row.id)
       .subscribe(res => {
         this.formValue.reset();
         this.dialogRef.close();
         this.toastr.success('Ürün Eklendi', 'Success');
       })
      }
     else{
       this.toastr.error('Form Değerleri Geçerli Değil', 'Error');
       this.dialogRef.close(this.formValue);
     }
   }
   close(){
     this.dialogRef.close(this.formValue);
   }

}
