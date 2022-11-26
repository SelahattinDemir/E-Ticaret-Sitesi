import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ApiService } from '../../Services/api.service';
import { product } from '../../models/product';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  public formValue !: FormGroup;
  //for showing update or add button depends on situation
  public actionButton: string = "Ekle";

  //Angular dialog metarial working like modal but more complex and efficent
  //Dashboard dialog actions handling with mat-dialog-ref
  //Data transfered with mat-dialog-data taking data from table(dashboard component) 
  constructor(private api: ApiService, private formBuilder: FormBuilder, private toastr: ToastrService, private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public row: product) { }
    
  //validators for dialog form
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      title: ['', Validators.required],
      brand: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern(/[0-9]/)]],
      description: ['', Validators.required],
      category: ['', Validators.required],
      image: ['', [Validators.required, Validators.pattern(/https?:\/\//)]],
      star: [0],
      comments: ['']
    })

    //setting formvalues for updating action
    if(this.row){
      this.actionButton = "Güncelle"
       this.formValue.controls['title'].setValue(this.row.title)
       this.formValue.controls['brand'].setValue(this.row.brand)
       this.formValue.controls['price'].setValue(this.row.price)
       this.formValue.controls['description'].setValue(this.row.description)
       this.formValue.controls['category'].setValue(this.row.category)
       this.formValue.controls['image'].setValue(this.row.image)
       this.formValue.controls['star'].setValue(this.row.star)
       this.formValue.controls['comments'].setValue(this.row.comments)
    }
  }

  // if you click update return update action else posting item to db with form value
  postItem() {
    if(!this.row){
      if(this.formValue.value){
        this.api.postItemApi(this.formValue.value)
        .subscribe(res => {
          this.formValue.reset();
          this.toastr.success('Ürün Eklendi', 'Success');
        })
      }
      else{
        this.toastr.error('Form Değerleri Geçerli Değil', 'Error');
        //sending form data with close action so dashboard and guard can use 
        this.dialogRef.close(this.formValue);
      }
    }
    else{
      this.updateItem();
    }
  }
   
   //updating item to db with form value and row.id(which they picked with button)
  updateItem(){
    if(this.formValue.valid){
      this.api.updateItemApi(this.formValue.value, this.row.id)
      .subscribe(res => {
        this.formValue.reset();
        this.toastr.success('Ürün Eklendi', 'Success');
      })
    }
    else{
      this.toastr.error('Form Değerleri Geçerli Değil', 'Error');
      //sending form data with close action so dashboard and guard can use 
      this.dialogRef.close(this.formValue);
    }
  }
  close(){
    //sending form data with close action so dashboard and guard can use 
    this.dialogRef.close(this.formValue);
  }

  //Error handling for formvalidation  at template 
  public errorHandling = (control: string, error: string) => {
    return this.formValue.controls[control].hasError(error);
  }

}
