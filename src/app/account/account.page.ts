import { Component, OnInit } from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  image = 'https://www.kasterencultuur.nl/editor/placeholder.jpg';
  constructor(
    private camera:Camera,
    private menu: MenuController
  ) { }

  ngOnInit() {
  }

  openEnd(){
    this.menu.close();
  }

  async addPhoto(source:string){
    if (source==='library') {
      console.log('library');
      const libraryImage=await this.openLibrary();
      this.image = 'data:image/jpg;base64,' + libraryImage;
    }
    else{
      console.log('camera');
      const cameraImage=await this.openCamera();
      this.image = 'data:image/jpg;base64,' + cameraImage;
    }
  }

  async openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.CAMERA
    };
    return await this.camera.getPicture(options);
  }

  async openLibrary() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };
    return await this.camera.getPicture(options);
  }

}
