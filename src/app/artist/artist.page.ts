import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.page.html',
  styleUrls: ['./artist.page.scss'],
})
export class ArtistPage implements OnInit {

  data:any;
  constructor(
    public http: HttpClient,
    public menu: MenuController
  ) {
    this.getArticle()
   }

  ngOnInit() {
  }

  getArticle(){
    let url = 'http://newsapi.org/v2/everything?q=artist&from=2020-12-20&sortBy=publishedAt&apiKey=48d469635a4d4cf8b7e550d8a7e9b22d';
    this.http.get(url).subscribe(data => {
      this.data = data;
    })
  }

  openEnd(){
    this.menu.close();
  }

}
