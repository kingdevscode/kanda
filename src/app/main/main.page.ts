import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  
  data : any;
  constructor(
    public http: HttpClient
  ){
    this.getArticle()
  }

  ngOnInit() {
  }

  getArticle(){
    let url = 'http://newsapi.org/v2/everything?q=cultural%20festival&from=2020-12-05&sortBy=publishedAt&apiKey=1f226b8f2beb45ceb00223a8e2c68ce3';
    this.http.get(url).subscribe(data => {
      this.data = data;
    })
  }
}
