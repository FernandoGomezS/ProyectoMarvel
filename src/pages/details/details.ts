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
    var creatorstotal;
    var x = 0;
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

    var characterstotal;
    x = 0;
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
  ionViewDidLoad() {
  }


}
