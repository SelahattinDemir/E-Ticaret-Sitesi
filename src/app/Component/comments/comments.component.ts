import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  public productsDetail: any;
  public currentUrl!: string;
  public commentForm!: FormGroup;
  private itemId: any;

  constructor(
    private route: ActivatedRoute, 
    private api: ApiService, 
    private toastr: ToastrService, 
    private formBuilder:  FormBuilder
  ) { }

  ngOnInit(): void {
    //With paramMap you can route multiple page with only one template 
    this.itemId = Number(this.route.snapshot.paramMap.get("id"));
    this.currentUrl =`?id=${this.itemId}`;
    //For template view taking data from server   
    this.api.filterApi(this.currentUrl).subscribe((res) => {
      this.productsDetail = res;
    });
    this.commentForm = this.formBuilder.group({
      username: ["", Validators.required],
      comment: ["", Validators.required]
    })
  }

  submit(){
    let date = new Date().toString();
    let comment = {
      "username": this.commentForm.value.username, 
      "comment": this.commentForm.value.comment
    };
    Object.assign(comment, { "time": date });
    //Star section
    //In real application this should not divided by 2 this is only for mock up
    // Comment section
    this.productsDetail[0].comments.push(comment);
    this.api
      .updateItemApi(this.productsDetail[0], this.itemId)
      .subscribe(res => {
        this.commentForm.reset();
        this.toastr.success('Yorumunuz Eklendi', 'Success');;
    });
  }

}
