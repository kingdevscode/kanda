import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { error } from 'protractor';
import { AuthService } from '../service/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string;
  password: string;
  user: Observable<any[]>;
 
  constructor(
    private router:Router,
    private auth:AuthService,
    private toastr:ToastController,
    private loadingCtrl:LoadingController,
    private afs : AngularFirestore,
    private afauth : AngularFireAuth
  ) {
    this.user = this.afs.collection('users').valueChanges();
  }

  account(){
    this.router.navigate(['/account']);
  }

  register(){
    this.router.navigate(['/inscription']);
  }

  forgot(){
    this.router.navigate(['/forgot']);
  }

  async login(){
    if (this.email && this.password) {
      const loading= await this.loadingCtrl.create({
        message:'Longing in..',
        spinner:'crescent',
        showBackdrop:true
      });

      loading.present();

      this.auth.login(this.email,this.password).then(()=>{
        loading.dismiss();
        console.log(this.user);
        this.router.navigate(['/welcome']);
      })

      .catch((error)=>{
        loading.dismiss();
        this.router.navigate(['/home']);
        this.toast(error.message, 'danger');
      });
    } else{
      this.toast('Please enter your email and password','danger');
    }
  }
  async toast(message,status){
    const toast = await this.toastr.create({
      message:message,
      position:'top',
      color:status,
      duration:2000
    });

    toast.present();
  }

}
