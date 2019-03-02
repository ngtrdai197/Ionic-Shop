import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';
import { API } from '../config/API';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _product = new BehaviorSubject<IProduct[]>(Array());

  get __fetchProduct() {
    return this._product.asObservable();
  }

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<IProduct[]>(`${API.HOST}/${API.PRODUCT.GET_ALL}`).pipe(
      map((res: IProduct[]) => {
        return res.map(x => {
          const product: IProduct = {
            _id: x._id,
            ProductName: x.ProductName,
            UrlPhoto: x.UrlPhoto,
            Price: x.Price,
            Description: x.Description
          }
          return product;
        })
      }), tap(data => {
        this._product.next(data);
      })).subscribe();
  }

  getProductById(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${API.HOST}/${API.PRODUCT.GET_BY_ID}/${id}`);
  }

}
