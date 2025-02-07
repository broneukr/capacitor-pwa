import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation, Position } from '@capacitor/geolocation';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  myImage: string = null;
  position: Position = null;

  constructor() {}

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });

    this.myImage = image.webPath;
    
  }
  

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    
    this.position = coordinates;
    console.log('my pos: ', this.position);

  }

  async share() {
    await Share.share({
      title: 'Come and find me',
      text: `Here's my current location: 
        ${this.position.coords.latitude}, 
        ${this.position.coords.longitude}`,
      url: 'http://ionicacademy.com/'
    });
  }
}
  const stream = await navigator.mediaDevices.getUserMedia({ video : true });
  const track = stream.getVideoTracks()[0];
  let imageCapture = new ImageCapture(track);
  imageCapture.takePhoto().then((blob) => {
      const newFile = new File([blob], "MyJPEG.jpg", { type: "image/jpeg" });
      EXIF.getData(newFile, function () {
          const make = EXIF.getAllTags(newFile);
          console.log("All data", make);
     });
  })
