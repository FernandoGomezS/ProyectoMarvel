import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { comicsService } from '../../providers/comics-service/comics-service';
import { DetailsPage } from '../../pages/details/details'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  comics: any[] = [];
  searchQuery: string = '';

  constructor(
    public navCtrl: NavController,
    public comicService: comicsService
  ) { }

  ionViewDidLoad() {
    this.comicService.getcomics()
      .then(data => {
        this.comics = data.data.results;

        this.comics = this.comics.map(item => {
          //Validate Year
          var validate = /\((.[0-9]*)\)/;
          if (validate.test(item.title) == false) {
            item.year = (new Date(item.dates[0].date)).getFullYear(); //Get from date onsaleDate
          }
          else {
            item.year = item.title.match(/\((.[0-9]*)\)/).pop(); //Get from title
          }
          //Validate Title         
          item.title = item.title.replace(/\((.*)\)/, "");
          //Validate Imgs
          item.src = item.thumbnail.path + "/portrait_small." + item.thumbnail.extension;
          item.src2 = item.thumbnail.path + "/portrait_incredible." + item.thumbnail.extension;
          return item;
        });

      })
      .catch(error => {
        console.error(error);
      })


  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.ionViewDidLoad();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.comics = this.comics.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  openNavDetailsPage(comic) {
    this.navCtrl.push(DetailsPage, { comic: comic });
  }
}
