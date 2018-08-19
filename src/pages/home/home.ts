import {Component} from '@angular/core';
import {Modal, ModalController, NavController} from 'ionic-angular';
import {DrinkDataProvider} from "../../providers/drink-data/drink-data";

import {DescriptionModalPage} from "../description-modal/description-modal";
import {GetYourDrinkPage} from "../get-your-drink/get-your-drink";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //Variables for getting the json data
  beer: any;
  brandy: any;
  vodka: any;
  whiskey: any;
  wine: any;

  //Variables for getting the json data
  beerPurchased: any = [];
  brandyPurchased: any = [];
  vodkaPurchased: any = [];
  whiskeyPurchased: any = [];
  winePurchased: any = [];

  lastRowBrandy: number;
  lastRowVodka: number;
  lastRowWhiskey: number;
  lastRowWine: number;

  //variables for the grid
  gridBeer: Array<Array<object>>;
  gridBrandy: Array<Array<object>>;
  gridVodka: Array<Array<object>>;
  gridWhiskey: Array<Array<any>>;
  gridWine: Array<Array<any>>;

  beerCount: number = 0;
  brandyCount: number = 0;
  vodkaCount: number = 0;
  whiskeyCount: number = 0;
  wineCount: number = 0;


  constructor(private modal: ModalController, public drink: DrinkDataProvider, public navCtrl: NavController) {

  }

  ionViewDidLoad() {

    this.getData();

    /*this.drink.displayDrinks();

    this.whiskey = this.drink.whiskey;
    this.vodka = this.drink.vodka;
    this.beer = this.drink.beer;
    this.brandy = this.drink.brandy;
    this.wine = this.drink.wine;

    this.updateValue();

    if (this.brandy) {
      for (let i = 0; i < this.brandy.length; i++) {
        if (this.brandy[i].purchased == 'yes') {
          this.brandyPurchased[this.brandyCount] = this.brandy[i];
          this.brandyCount++;
        }
      }
    }

    if (this.vodka) {
      for (let i = 0; i < this.vodka.length; i++) {
        if (this.vodka[i].purchased == 'yes') {
          this.vodkaPurchased[this.vodkaCount] = this.vodka[i];
          this.vodkaCount++;
        }
      }
    }

    if (this.whiskey) {
      for (let i = 0; i < this.whiskey.length; i++) {
        if (this.whiskey[i].purchased == 'yes') {
          this.whiskeyPurchased[this.whiskeyCount] = this.whiskey[i];
          this.whiskeyCount++;
        }
      }
    }


    if (this.wine) {
      for (let i = 0; i < this.wine.length; i++) {
        if (this.wine[i].purchased == 'yes') {
          this.winePurchased[this.wineCount] = this.wine[i];
          this.wineCount++;
        }
      }
    }*/



  }

  getData(){

    this.drink.displayDrinks();

    this.whiskey = this.drink.whiskey;
    this.vodka = this.drink.vodka;
    this.beer = this.drink.beer;
    this.brandy = this.drink.brandy;
    this.wine = this.drink.wine;

    this.updateValue();

    if (this.brandy) {
      for (let i = 0; i < this.brandy.length; i++) {
        if (this.brandy[i].purchased == 'yes') {
          this.brandyPurchased[this.brandyCount] = this.brandy[i];
          this.brandyCount++;
        }
      }
    }

    if (this.vodka) {
      for (let i = 0; i < this.vodka.length; i++) {
        if (this.vodka[i].purchased == 'yes') {
          this.vodkaPurchased[this.vodkaCount] = this.vodka[i];
          this.vodkaCount++;
        }
      }
    }

    if (this.whiskey) {
      for (let i = 0; i < this.whiskey.length; i++) {
        if (this.whiskey[i].purchased == 'yes') {
          this.whiskeyPurchased[this.whiskeyCount] = this.whiskey[i];
          this.whiskeyCount++;
        }
      }
    }


    if (this.wine) {
      for (let i = 0; i < this.wine.length; i++) {
        if (this.wine[i].purchased == 'yes') {
          this.winePurchased[this.wineCount] = this.wine[i];
          this.wineCount++;
        }
      }
    }
  }


  updateValue() {
    /* for (let i=0; i<this.whiskey.length;i++){
       if(this.whiskey[i].name=='Red Label'){
         this.drink.whiskey[i].name = 'Nikhil';
         this.drink.whiskey[i].ml_left = '600';
       }
     }

     this.drink.whiskey[0].ml_left = '250';*/
  }

  openModal(drink_details) {

    this.navCtrl.push(GetYourDrinkPage, {data: drink_details});

  }

}
