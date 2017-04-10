import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Shop } from './shop';

@NgModule({
  declarations: [
    Shop,
  ],
  imports: [
    IonicModule.forChild(Shop),
  ],
  exports: [
    Shop
  ]
})
export class ShopModule {}
