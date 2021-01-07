import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  
  name:string;
  email:string;
  password:string;
  confirmPassword:string;
  
  passwordMatch: boolean;
  toastr: any;

  constructor(
    private afs:AngularFirestore,
    private afauth:AngularFireAuth,
    private loadingCtrl:LoadingController,
    private toaster:ToastController,
    private router:Router
  ) { }

  ngOnInit() {
  }

  async register(){
    if (this.email && this.name && this.password) {
      const loading=await this.loadingCtrl.create({
        message:'loading..',
        spinner:'crescent',
        showBackdrop:true
      });

      loading.present();
      this.afauth.createUserWithEmailAndPassword(this.email,this.password).then((data)=>{
        this.afs.collection('users').doc(data.user.uid).set({
          'userId':data.user.uid,
          'name':this.name,
          'email':this.email,
          'createdAt':Date.now()
        });

        data.user.sendEmailVerification();
      })
      .then(()=>{
        loading.dismiss();
        this.toast('Registration Success!','success');
        this.router.navigate(['/welcome']);
      })
      .catch((error)=>{
        loading.dismiss();
        this.toast(error.message,'danger')
      })
    } else{
      this.toast('Please fill the form', 'dander');
    }
  }

  checkPassword(){
    if (this.password==this.confirmPassword) {
      this.passwordMatch=true;
    }
    else{
      this.passwordMatch=false;
    }
  }

  async toast(message , status){
    const toast=await this.toastr.create({
      message:message,
      position:'top',
      color:status,
      duration:2000
    });

    toast.present();
  }

}
