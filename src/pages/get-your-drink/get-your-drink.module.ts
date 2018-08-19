import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetYourDrinkPage } from './get-your-drink';

@NgModule({
  declarations: [
    GetYourDrinkPage,
  ],
  imports: [
    IonicPageModule.forChild(GetYourDrinkPage),
  ],
})
export class GetYourDrinkPageModule {}
