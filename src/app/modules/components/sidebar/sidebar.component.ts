import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  allcategories :Product[] = [];
  subscription:Subscription = new Subscription();
  selectcategory :any
  @Output() filterProduct = new EventEmitter()

  constructor(
    private _products:ProductsService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
  this.getAllcategories()
  }


  getAllcategories(){
    this.spinner.show();
    this.subscription.add(
      this._products.getAllCategories().subscribe(res => {
        this.spinner.hide();
        this.allcategories = res;
      },error => {
        this.spinner.hide();
      })
    )
  }

  filter(event:any) {
   this.filterProduct.emit(event)
   console.log(event)
  }



  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
