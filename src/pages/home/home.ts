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

  constructor(
    public navCtrl: NavController,
    public comicService: comicsService
  ) { }

  ionViewDidLoad() {
    this.comicService.getcomics()
      .then(data => {
        this.comics = data.data.results;

        this.comics = this.comics.map(item => {
          //item.year = item.title.match(/\((.*)\)/).pop();  
          item.year = (new Date(item.dates[0].date)).getFullYear();
          item.src = item.thumbnail.path + "/portrait_small." + item.thumbnail.extension;
          item.src2 = item.thumbnail.path + "/portrait_incredible." + item.thumbnail.extension;
          return item;
        });

      })
      .catch(error => {
        console.error(error);
      })


  }
     openNavDetailsPage(comic) {      
    this.navCtrl.push(DetailsPage, { comic: comic });
  }
}
