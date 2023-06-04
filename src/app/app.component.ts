import { Component } from '@angular/core';
import { ApiserviceService } from './apiservice.service';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'image-gallery';
  public datas:any = []
 constructor(private http: HttpClient) {}
 
  
  

   getData(){
    const url ='https://api.nasa.gov/planetary/apod?api_key=MZNY3JzFVsWZghhl0QgBR6VOV15fXhY2pKvkijFa'
    this.http.get<any>(url).subscribe((res)=>{
      this.datas = Object.values(res);
      console.log(this.datas)
    })
  }
  ngOnInit() {
    this.getData()
  }
 }
