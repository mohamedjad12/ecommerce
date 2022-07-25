import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-heder',
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.scss']
})
export class HederComponent implements OnInit {
  allcategories :Product[] = [];
  subscription:Subscription = new Subscription();
  selectcategory :any
  searchText:any
  @Input() Productcount : any

  @Output() search = new EventEmitter()
  @Output() filterProduct = new EventEmitter()

  constructor(
    private _products:ProductsService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.getAllcategories();
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
  }

  searchT(event:any){
    this.search.emit(event)
  }



  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
