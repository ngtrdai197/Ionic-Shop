import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/@core/services/product.service';
import { IProduct } from 'src/@core/interfaces/product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  isLoading = true;
  _id = '';
  product: IProduct;
  constructor(private activatedService: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.activatedService.paramMap.subscribe(params => {
      this._id = params.get('id');
      this.onFetchProductById();
    })
  }

  onFetchProductById() {
    this.productService.getProductById(this._id).subscribe(data => {
      this.product = data[0];
      this.isLoading = false;
    });

  }

}
