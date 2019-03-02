import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ProductPage } from './product/product.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    declarations: [ProductPage],
    exports: [ProductPage]
})
export class ShareModule { }