import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/@core/services/product.service';
import { IProduct } from 'src/@core/interfaces/product.interface';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  products: IProduct[] = [];
  constructor(private productService: ProductService, private router: Router, public navCtrl: NavController) { }

  ngOnInit() {
    this.productService.__fetchProduct.subscribe(data => {
      this.products = data;
    });
    this.productService.getProducts();
  }

  onAuthentication(){
    this.navCtrl.navigateForward('/auth/login')
  }

}
