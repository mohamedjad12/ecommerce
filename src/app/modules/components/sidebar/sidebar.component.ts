import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  ) { }

  ngOnInit(): void {
  this.getAllcategories()
  }


  getAllcategories(){
    this.subscription.add(
      this._products.getAllCategories().subscribe(res => {
        this.allcategories = res;
      },error => {
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
