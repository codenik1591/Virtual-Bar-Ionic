import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AvailableDrinksPage } from './available-drinks';

@NgModule({
  declarations: [
    AvailableDrinksPage,
  ],
  imports: [
    IonicPageModule.forChild(AvailableDrinksPage),
  ],
})
export class AvailableDrinksPageModule {}
