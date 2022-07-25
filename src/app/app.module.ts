import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ProductsListComponent } from './modules/components/products-list/products-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HederComponent } from './shared/heder/heder.component';
import { HomePageComponent } from './modules/components/home-page/home-page.component';
import { SidebarComponent } from './modules/components/sidebar/sidebar.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/store';



@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    HederComponent,
    HomePageComponent,
    SidebarComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    StoreModule.forRoot({counter: counterReducer})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
