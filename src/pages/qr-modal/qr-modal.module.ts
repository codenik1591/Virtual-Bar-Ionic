import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrModalPage } from './qr-modal';

@NgModule({
  declarations: [
    QrModalPage,
  ],
  imports: [
    IonicPageModule.forChild(QrModalPage),
  ],
})
export class QrModalPageModule {}
