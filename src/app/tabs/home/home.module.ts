import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home.page';
import { ProductDetailPage } from 'src/app/product-detail/product-detail.page';
import { ShareModule } from 'src/@share/share.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: '' },
  { path: 'home', component: HomePage },
  { path: 'product-detail/:id', component: ProductDetailPage }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage, ProductDetailPage]
})
export class HomePageModule { }
