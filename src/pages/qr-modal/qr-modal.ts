import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import {SMS} from "@ionic-native/sms";

/**
 * Generated class for the QrModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qr-modal',
  templateUrl: 'qr-modal.html',
})
export class QrModalPage {
  qrCode: any ;
  finQRCode: any;

  constructor(public toast: ToastController, public sms: SMS, public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {

    this.qrCode = navParams.get('data');
    this.finQRCode = './assets/imgs/'+this.qrCode+'ML.png';
    console.log(this.finQRCode);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrModalPage');
  }

  closeModal() {
    this.sendSMS();
    this.view.dismiss();
  }

  async sendSMS() {

    try {

      await this.sms.send('5512295964', 'Hello,\nYou have used '+this.qrCode+' ml !!\n');
      const toast = this.toast.create({
        message: 'Message Sent Successfully!',
        duration: 3000
      });
      toast.present();

    } catch (e) {
      const toast = this.toast.create({
        message: 'Message Sent Failed!',
        duration: 3000
      });
      toast.present();

    }

  }

}
