import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';
import { Store } from '@ngrx/store';
import { StoreInterface } from 'src/app/store/store';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  productsList: Product[] = [];
  departments = [
    'Bakery',
    'Fruit and vegetables',
    'Meat and fish',
    'Drinks',
    'Kitchen',
    'Special nutrition',
    'Baby',
    'Pharmacy',
  ];
  params = {
    limit: 12,
  };
  searchText: any;
  count: number = 0;

  subscription: Subscription = new Subscription();

  constructor(
    private _products: ProductsService,
    private store: Store<StoreInterface>,
    private spinner: NgxSpinnerService,

  ) {
    store.subscribe((data) => (this.count = data.counter.n));
  }

  ngOnInit(): void {
    this.getProductsList();
  }

  getProductsList() {
    this.spinner.show();
    this.subscription.add(
      this._products.getProductsList(this.params).subscribe(
        (res) => {
          this.spinner.hide();
          this.productsList = res.products;
        },
        (error) => {
          this.spinner.hide();
        }
      )
    );
  }

  filterCategory(event: any) {
    if (event == 'All categories') {
      this.getProductsList();
    } else {
      this.getProductsOfCategory(event);
    }
  }

  getProductsOfCategory(param: any) {
    this.spinner.show();
    this.subscription.add(
      this._products.getProductsofCategory(param).subscribe(
        (res) => {
          this.spinner.hide();
          this.productsList = res.products;
        },
        (error) => {
          this.spinner.hide();
        }
      )
    );
  }

  searchProduct(event: any) {
    this.searchText = event;
  }
  addProduct(event: any) {
    this.store.dispatch({ type: 'addproduct' });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
