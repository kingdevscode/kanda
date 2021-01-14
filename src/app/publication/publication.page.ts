import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.page.html',
  styleUrls: ['./publication.page.scss'],
})
export class PublicationPage implements OnInit {

  user={ 
    name:'Simon Grimn',
    website:'www:ionicacademy',
    address:{
      zip:48149,
      city:'Muenster',
      country:'DE'
     },
     interests:['Ionic', 'Angular','YouTube','Sports']
  };

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  openDetailsWithQueryParams(){ 
    let navigationExtras={ 
      queryParams:{ 
        special:JSON.stringify(this.user)
      }

    }
    this.router.navigate(['ticket'],navigationExtras);
  }

  openDetailsWithService(){ 
    
  }

  openDetailsWithState(){ 
    
  }

}
