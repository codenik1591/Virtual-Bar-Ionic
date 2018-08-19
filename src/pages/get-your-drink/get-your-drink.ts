import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DrinkDataProvider} from "../../providers/drink-data/drink-data";
import {QrModalPage} from "../qr-modal/qr-modal";

/**
 * Generated class for the GetYourDrinkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-get-your-drink',
  templateUrl: 'get-your-drink.html',
})
export class GetYourDrinkPage {

  drink: any;
  str1: any;
  val: any;
  value: string;
  liquor: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public drinkProvider: DrinkDataProvider) {
    this.drink = navParams.get('data');
    console.log(this.drink);
  }

  ionViewDidLoad() {
    this.liquor = document.getElementById("water");
    console.log(this.drink.ml_left * 0.42);
    console.log("onload");
    this.liquor.style.height = (this.drink.ml_left * 0.42) + "px";
    console.log('ionViewDidLoad GetYourDrinkPage');

  }


  giveDrink(quantity: number) {


    /*this.str1=document.getElementById("water").offsetHeight;*/

    let ml = this.drink.ml_left - (quantity * 30);
    this.drink.ml_left = ml;

    console.log(this.drink.ml_left)  ;
    console.log(ml)  ;


    if(this.drink.type=='brandy'){
      for (let i = 0; i < this.drinkProvider.brandy.length; i++) {

        if (this.drinkProvider.brandy[i].name == this.drink.name) {


          this.drinkProvider.brandy[i].ml_left = ml;
          //alert(this.drinkProvider.brandy[i].ml_left);
        }
      }
    }




    this.liquor = document.getElementById("water");
    this.liquor.style.height = this.drink.ml_left * 0.42 +"px";

    this.val = (this.liquor.offsetHeight);
    /*		if( (liquor.style.height-(0.04*value*str1))== "NaN")
                alert("Not enough quantity left!");*/
    this.val = this.val - (0.04 * quantity * this.drink.ml_left);

    this.value = this.val;
     this.liquor.style.transition = "all 1s ease-out";
    this.liquor.style.borderTopLeftRadius = "0px";
    this.liquor.style.borderTopRightRadius = "0px";


    //setTimeout( this.openModal((quantity*30)), 6000);
    //this.openModal((quantity*30));
    setTimeout(() => {
      this.openModal((quantity*30));
    },2000);

  }

  openModal(quantity) {

    this.navCtrl.push(QrModalPage, {data: quantity});

  }

}
