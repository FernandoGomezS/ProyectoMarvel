import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  comic;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.comic = navParams.data.comic;
    //Validate creators 
    var creatorstotal;
    var x = 0;
    if (this.comic.creators.items.length > 0) {
      for (var i in this.comic.creators.items) {
        if (x == 0) {
          creatorstotal = this.comic.creators.items[i].name;
          x++;
        }
        else {
          creatorstotal = creatorstotal + ', ' + this.comic.creators.items[i].name;
        }
      }
      this.comic["creatorsFinal"] = creatorstotal;
    }
    else {
      this.comic["creatorsFinal"] = "No information";
    }
    //Validate characters
    var characterstotal;
    x = 0;
    if (this.comic.characters.items.length > 0) {
      for (var j in this.comic.characters.items) {
        if (x == 0) {
          characterstotal = this.comic.characters.items[j].name;
          x++;
        }
        else {
          characterstotal = characterstotal + ', ' + this.comic.characters.items[j].name;
        }
      }
      this.comic["charactersFinal"] = characterstotal;
    }
    else {
      this.comic["charactersFinal"] = "No information";
    }
    //Validate urls
    var myVar = this.comic.urls[1];
    if (typeof myVar === "undefined") {
      this.comic.urls[1] = { "url": "#" };
    }    
    //Validate prices 
    if (this.comic.prices.length <= 1) {      
        this.comic.prices[1] = { "type": "digitalprice", "price": "No information" };

    }
    //Validate description
     if(this.comic.description!=null){
            this.comic.description=this.comic.description.replace(/(?:<[^>]+>)/gi, '');         
           } 
      
  }
  ionViewDidLoad() {
  }


}
