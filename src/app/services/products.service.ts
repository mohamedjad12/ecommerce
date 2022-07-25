import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Product} from "../models/products";

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private baseURL = environment.apiUrl;
  constructor(private _http: HttpClient) { }

  /**
   * @param id
   * @param params
   * @returns {Products}
 */
  getProductsList(params?: any): Observable<any> {
    const url = `${this.baseURL}products`;
    return this._http.get<any>(url , { params: params });
  }


  /**
   *
   */
  getAllCategories(): Observable<any> {
    const url = `${this.baseURL}products/categories`;
    return this._http.get(url);
  }

  /**
   *@param param
   */
   getProductsofCategory(param: any): Observable<any> {
    const url = `${this.baseURL}products/category/${param}`;
    return this._http.get(url);
  }
}

