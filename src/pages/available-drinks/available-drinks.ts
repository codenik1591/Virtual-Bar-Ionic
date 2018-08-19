import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GetYourDrinkPage} from "../get-your-drink/get-your-drink";
import {DrinkDataProvider} from "../../providers/drink-data/drink-data";
import {DescriptionModalPage} from "../description-modal/description-modal";

/**
 * Generated class for the AvailableDrinksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-available-drinks',
  templateUrl: 'available-drinks.html',
})
export class AvailableDrinksPage {

  //Variables for getting the json data
  beer: any;
  brandy: any;
  vodka: any;
  whiskey: any;
  wine: any;


  //variables to check if the JSON data is not empty
  brandyIsValid: boolean;
  beerIsValid: boolean;
  vodkaIsValid: boolean;
  whiskeyIsValid: boolean;
  wineIsValid: boolean;


  //variables to print the message
  beerLen: number;
  wineLen: number;
  brandyLen: number;
  vodkaLen: number;
  whiskeyLen: number;

  //variables for the grid
  gridBeer: Array<Array<object>>;
  gridBrandy: Array<Array<object>>;
  gridVodka: Array<Array<object>>;
  gridWhiskey: Array<Array<any>>;

  brandyObj: any;
  vodkaObj: any;
  wineObj: any;
  whiskeyObj: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public drink: DrinkDataProvider) {
  }



  ionViewDidLoad() {
    this.brandyObj=document.getElementById('brandy');
    this.vodkaObj=document.getElementById('vodka');
    this.whiskeyObj=document.getElementById('whiskey');
    this.wineObj=document.getElementById('wine');

    this.drink.displayDrinks();

    this.whiskey = this.drink.whiskey;
    this.vodka = this.drink.vodka;
    this.beer = this.drink.beer;
    this.brandy = this.drink.brandy;
    this.wine = this.drink.wine;

    console.log(this.whiskey);

    this.updateValue();

    console.log(this.whiskey[0]);

    console.log(Math.ceil(this.vodka.length/2));

    if (this.wine){
      this.wineIsValid = true;
      this.wineLen = Math.ceil(this.wine.length);
    }
    else
      this.wineIsValid = false;

    if (this.brandy){
      this.brandyIsValid = true;
      this.brandyLen = Math.ceil(this.brandy.length);
    }
    else
      this.brandyIsValid = false;

    if (this.vodka){
      this.vodkaIsValid = true;
      this.vodkaLen = Math.ceil(this.vodka.length);
    }
    else
      this.vodkaIsValid = false;

    if (this.whiskey){
      this.whiskeyIsValid = true;
      this.whiskeyLen = Math.ceil(this.whiskey.length);
    }
    else
      this.whiskeyIsValid = false;
    /*console.log("Whiskey: \n" + this.whiskey);
    console.log("Vodka: \n" + this.vodka);
    console.log("Beer: \n" + this.beer);
    console.log("Brandy: \n" + this.brandy);*/

  }

  showBrandy(){
    this.brandyObj.style.visibility="visible";
    this.whiskeyObj.style.visibility="hidden";
    this.vodkaObj.style.visibility="hidden";
    this.wineObj.style.visibility="hidden";
    this.brandyObj.style.display="block";
  }

  showVodka(){
    this.brandyObj.style.visibility="hidden";
    this.whiskeyObj.style.visibility="hidden";
    this.vodkaObj.style.visibility="visible";
    this.wineObj.style.visibility="hidden";
    this.vodkaObj.style.display="block";
  }

  showWhiskey(){
    this.brandyObj.style.visibility="hidden";
    this.whiskeyObj.style.visibility="visible";
    this.vodkaObj.style.visibility="hidden";
    this.wineObj.style.visibility="hidden";
    this.whiskeyObj.style.display="block";

  }

  showWine(){
    this.brandyObj.style.visibility="hidden";
    this.whiskeyObj.style.visibility="hidden";
    this.vodkaObj.style.visibility="hidden";
    this.wineObj.style.visibility="visible";
    this.wineObj.style.display="block";
  }

  updateValue(){
    /* for (let i=0; i<this.whiskey.length;i++){
       if(this.whiskey[i].name=='Red Label'){
         this.drink.whiskey[i].name = 'Nikhil';
         this.drink.whiskey[i].ml_left = '600';
       }
     }

     this.drink.whiskey[0].ml_left = '250';*/
  }
  openModal(drink_details) {

    //Sending data to GetYourDrink Page

    this.navCtrl.push(DescriptionModalPage, {data: drink_details});


    /* const myData = drink_details;
     console.log("MyData: "+myData);
     const myModal: Modal = this.modal.create('DescriptionModalPage', { data: myData});
     myModal.present();*/
  }

}
