import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/products';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
@Input() searchText:any
@Input()  productsList:Product[] = [];
@Output() counter = new EventEmitter()


  constructor() { }


  ngOnInit(): void {
  }
  addProduct(event:any){
    this.counter.emit(event)
  }






}

