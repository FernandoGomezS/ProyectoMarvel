import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Md5} from 'ts-md5/dist/md5';

@Injectable()
export class comicsService {

  constructor(
    private http: Http
  ) {}

  getcomics() {
    
    var ts = 1;
    var privateKey="edb8c96f8b36bd38946fb25207d7350de5ae3794";
    var publicKey="8b4b8bdebf950524d49ab01de18e69ad";
    var hash=Md5.hashStr(ts+privateKey+publicKey);
    var limit =100;
    return this.http.get('https://gateway.marvel.com/v1/public/comics?ts='+ts+"&startYear=2002"+'&apikey='+publicKey+'&hash='+hash+"&limit="+limit+"&orderBy=-onsaleDate")
    .map(res => res.json())
    .toPromise();
    
  }
}

