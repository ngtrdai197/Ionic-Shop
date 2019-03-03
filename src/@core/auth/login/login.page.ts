import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username = '';
  password = '';
  constructor(private authService: AuthService, public navCtrl: NavController) { }

  ngOnInit() {
  }

  onLogin() {
    console.log(`Username: ${this.username} - Password: ${this.password}`);
    this.authService.onLogin().subscribe(isLogin => {
      if (isLogin) {
        this.navCtrl.navigateForward('tabs/cart');
      }
    });
  }

}
