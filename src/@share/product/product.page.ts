import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/@core/interfaces/product.interface';
import { NavController } from '@ionic/angular';
import { CartService } from 'src/@core/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  @Input() product: IProduct;
  constructor(public navCtrl: NavController, private cartService: CartService) { }

  ngOnInit() {

  }

  onProductDetail(id: string) {
    this.navCtrl.navigateForward(`/tabs/product-detail/${id}`);
  }

  increment(product: IProduct){
    this.cartService.increment(product);
  }
  decrement(product: IProduct){
    this.cartService.decrement(product);
  }

}
