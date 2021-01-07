import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(
    private afauth:AngularFireAuth,
    private router:Router
  ) { }

  ngOnInit() {
  }

  logout(){
    this.afauth.signOut().then(()=>{
      this.router.navigate(['/home']);
    })
  }

}
