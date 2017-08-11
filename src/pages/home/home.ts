import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { comicsService } from '../../providers/comics-service/comics-service';
import { DetailsPage } from '../../pages/details/details';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  comics: any[] = [];

  constructor(
    public navCtrl: NavController,
    public comicService: comicsService,
    public loading: LoadingController
  ) { }

  ionViewDidLoad() {
    let loader = this.loading.create({
      content: 'Getting Comics...',
    });
    loader.present().then(() => {
      this.comicService.getComics()
        .then(data => {
          this.comics = data.data.results;
          this.validateComics();
        })
        .catch(error => {
          console.error(error);
        })
      loader.dismiss();
    });
  }
  //Gets Comics for search value
  getItems(ev: any) {
    let val = ev.target.value;
    if (val && val.trim() != '') {
      if (val.length == 4 && this.validateVal(val)) {
        this.comicService.getComicsSearchYear(val)
          .then(data => {
            this.comics = data.data.results;
            this.validateComics();
          })
          .catch(error => {
            console.error(error);
          });
      }
      else {
        this.comicService.getComicsSearchTitle(val)
          .then(data => {
            this.comics = data.data.results;
            this.validateComics();
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
    else {
      this.ionViewDidLoad();
    }
  }
  //Call to page Details
  openNavDetailsPage(comic) {
    this.navCtrl.push(DetailsPage, { comic: comic });
  }
  //validate the Comics 
  validateComics() {
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
      item.src = item.thumbnail.path + "/portrait_medium." + item.thumbnail.extension;
      item.src2 = item.thumbnail.path + "/portrait_incredible." + item.thumbnail.extension;
      return item;
    });
  }
  //validate value of Search
  validateVal(val) {
    var n = Math.floor(Number(val));
    return String(n) === val && n >= 0;
  }
}
