import { Component } from '@angular/core';
import { ToastController, IonicPage, NavParams, ViewController } from 'ionic-angular';
import {SMS} from "@ionic-native/sms";
import {DrinkDataProvider} from "../../providers/drink-data/drink-data";

/**
 * Generated class for the DescriptionModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-description-modal',
  templateUrl: 'description-modal.html',
})
export class DescriptionModalPage {

  data: any;
  ml_left: number;
  drink_type: any;
  constructor(public navParams: NavParams, private view: ViewController, public toast: ToastController, private sms: SMS, private drink: DrinkDataProvider) {
    this.data = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescriptionModalPage');

  }

  validate(){
    this.ml_left = this.data.ml_left;
    console.log(this.ml_left);




    if(this.data.purchased=='no'){

      if(this.data.type=='brandy'){
        for(let i=0; i< this.drink.brandy.length;i++){
          if(this.data.name==this.drink.brandy[i].name){
            //this.drink.brandy[i].ml_left = '750';
            this.drink.brandy[i].purchased = 'yes';
          }
        }
        console.log("Brandy Bottle Added Successfully");
      }


      if(this.data.type=='vodka'){
        for(let i=0; i< this.drink.vodka.length;i++){
          if(this.data.name==this.drink.vodka[i].name){
            //this.drink.vodka[i].ml_left = '750';
            this.drink.vodka[i].purchased = 'yes';
          }
        }
        console.log("Vodka Bottle Added Successfully");
      }

      if(this.data.type=='whiskey'){
        for(let i=0; i< this.drink.whiskey.length;i++){
          if(this.data.name==this.drink.whiskey[i].name){
            //this.drink.whiskey[i].ml_left = '750';
            this.drink.whiskey[i].purchased = 'yes';
          }
        }
        console.log("Whiskey Bottle Added Successfully");
      }

      if(this.data.type=='wine'){
        for(let i=0; i< this.drink.wine.length;i++){
          if(this.data.name==this.drink.wine[i].name){
           // this.drink.wine[i].ml_left = '750';
            this.drink.wine[i].purchased = 'yes';
          }
        }
        console.log("Wine Bottle Added Successfully");
      }


      const toast = this.toast.create({
        message: this.data.name+'  Purchased Successfully!!',
        duration: 3000
      });

      toast.present();


      this.sendSMS();
    }
    else{
      console.log(" Bottle not purchased!!");
      //console.log('You already have '+ this.data.ml_left+'!!');
      const toast = this.toast.create({
        message: 'You have already purchased '+this.data.name,
        duration: 3000
      });

      toast.present();

    }
  }

  async sendSMS() {

    try {

        await this.sms.send('5512295964', 'Hello,\nYou have successfully purchased '+this.data.name+' !!');
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

  closeModal() {
    this.view.dismiss();
  }

}
