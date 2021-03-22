import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

images = ['erfolgreiche-junge-frau-im-modernen-buero-das-an-laptop-arbeitet_109710-1521.jpg', 'OVEDMK0.jpg', 'landingpage-vorlage-fuer-den-weltgrafiktag_23-2148891523.jpg'];
currentImage = 0;
showImage = true; 

/**
 * This function inits when the app has loaded
 */
ngOnInit() {
  this.updateImage();
}

updateImage() {

setInterval(() => {
this.currentImage++;
this.currentImage = this.currentImage % this.images.length; //rechnet den "Rest" aus, damit nach 3 Bildern wieder von vorne losgeht
this.showImage = false;

setTimeout(() => {
this.showImage = true; 
}, 10)
}, 8000);
}

}
