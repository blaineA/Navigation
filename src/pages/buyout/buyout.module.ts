import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Buyout } from './buyout';

@NgModule({
  declarations: [
    Buyout,
  ],
  imports: [
    IonicModule.forChild(Buyout),
  ],
  exports: [
    Buyout
  ]
})
export class BuyoutModule {}
