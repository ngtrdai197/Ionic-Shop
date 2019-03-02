import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        loadChildren: './home/home.module#HomePageModule'
      },
      {
        path: 'cart', loadChildren: './cart/cart.module#CartPageModule'
      },
      {
        path: 'social', loadChildren: './social/social.module#SocialPageModule'
      },
    ]
  },
  { path: '', redirectTo: 'tabs/home', pathMatch: 'full' }

];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }
