import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/@core/services/cart.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  __cartQuantity = 0;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCartQuantity().subscribe(data => this.__cartQuantity = data);
  }

}
