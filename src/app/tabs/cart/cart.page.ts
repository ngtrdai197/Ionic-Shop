import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/@core/services/cart.service';
import { IProduct } from 'src/@core/interfaces/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  productsCart: IProduct[] = [];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCarts().subscribe(data => this.productsCart = data);
    console.log(this.productsCart);
    
  }

}
