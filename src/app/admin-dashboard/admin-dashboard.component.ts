import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  formValue !: FormGroup;
  adminData : any;
  adminObj : any={}
  showAdd !: boolean;
  showUpdate !: boolean;
  receive !: string;
  categorySpecification !: any;

  constructor(private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
    title: ['',Validators.required],
    price: ['',Validators.required],
    description: ['',Validators.required],
    category: ['',Validators.required],
    image: ['',Validators.required],
    brand: ['',Validators.required],
    star:[0],
    comment:[]
    })
    this.gettingData()
  }

  gettingData(){
    this.api.Getadmins()
    .subscribe(res=>{
      this.adminData = res
    })
  }

  addProduct(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postadminDetails() {
    this.adminObj.title = this.formValue.value.title;
    this.adminObj.price = this.formValue.value.price;
    this.adminObj.description = this.formValue.value.description;
    this.adminObj.category = this.formValue.value.category;
    this.adminObj.image = this.formValue.value.image;
    this.adminObj.brand = this.formValue.value.brand;
    this.adminObj.star = this.formValue.value.star;
    this.adminObj.comment = this.formValue.value.comment;
    this.api.Postadmin(this.adminObj)
    .subscribe(res => {
      console.log(res);
      this.gettingData()
    })
  }

  //formdaki veriyi alıp gönderen kısım
  editadminDetail(){
    this.adminObj.title = this.formValue.value.title;
    this.adminObj.price = this.formValue.value.price;
    this.adminObj.description = this.formValue.value.description;
    this.adminObj.category = this.formValue.value.category;
    this.adminObj.image = this.formValue.value.image;
    this.adminObj.brand = this.formValue.value.brand;
    this.adminObj.star = this.formValue.value.star;
    this.adminObj.comment = this.formValue.value.comment;
    this.api.Updateadmin(this.adminObj)
   .subscribe(res=>{
     alert("Başarıyla Güncellendi")
     let ref = document.getElementById('close');
     ref?.click();
     this.gettingData()
   })
 }

 //edit e tıklandığında o satırdaki veriyi alıp forma veren kısım
  onEdit(row : any){
    this.adminObj.id = row.id;
    this.formValue.controls['title'].setValue(row.title);
    this.formValue.controls['price'].setValue(row.price);
    this.formValue.controls['description'].setValue(row.description);
    this.formValue.controls['category'].setValue(row.category);
    this.formValue.controls['image'].setValue(row.image);
    this.formValue.controls['brand'].setValue(row.brand);
    this.showUpdate = true;
    this.showAdd = false;
  }

  deleteadminDetail(row : any){
    let clickedYes = confirm("Silmek istediğinizden emin misiniz?");
    if(clickedYes){
      this.api.Deleteadmin(row.id)
      .subscribe(res=>{
        alert("Başarıyla Silindi");
        this.gettingData()
      })
    }
  }

 canExit():boolean{
  if(this.formValue.pristine && this.formValue.touched || this.formValue.touched && this.formValue.invalid){
    if(confirm("Kaydedilmemiş bazı değişiklikler var")){
      return true
    }
    return false
  }
  return true
}

}
