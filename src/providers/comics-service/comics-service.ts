import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Md5} from 'ts-md5/dist/md5';

@Injectable()
export class comicsService {
  ts = 1;
  privateKey="edb8c96f8b36bd38946fb25207d7350de5ae3794";
  publicKey="8b4b8bdebf950524d49ab01de18e69ad";
  hash=Md5.hashStr(this.ts+this.privateKey+this.publicKey);
  limit =50;
  constructor(
    private http: Http
    
  ) {   }
  //Get Comics
  getComics() {     
    return this.http.get('https://gateway.marvel.com/v1/public/comics?ts='+this.ts+'&apikey='+this.publicKey+'&hash='+this.hash+"&limit="+this.limit+"&orderBy=-onsaleDate")
    .map(res => res.json())
    .toPromise();    
  }
  //Gets comic by title
  getComicsSearchTitle(title) { 
    return this.http.get('https://gateway.marvel.com/v1/public/comics?ts='+this.ts+"&titleStartsWith="+title+'&apikey='+this.publicKey+'&hash='+this.hash+"&limit="+this.limit+"&orderBy=-onsaleDate")
    .map(res => res.json())
    .toPromise();    
  }
  //Gets comic by year
  getComicsSearchYear(year) { 
    return this.http.get('https://gateway.marvel.com/v1/public/comics?ts='+this.ts+"&startYear="+year+'&apikey='+this.publicKey+'&hash='+this.hash+"&limit="+this.limit+"&orderBy=-onsaleDate")
    .map(res => res.json())
    .toPromise();    
  }

  
}

