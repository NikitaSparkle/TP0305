import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }
  getdata(){
    return this._http.get('https://api.nasa.gov/planetary/apod?api_key=MZNY3JzFVsWZghhl0QgBR6VOV15fXhY2pKvkijFa');
  }
}
