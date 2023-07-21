import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit{

  constructor() {}

  ngAfterViewInit(): void {
    let video: any = document.querySelector("#videoElement");
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" }, audio:false })
    .then( (stream) => {
      video.srcObject = stream;
      video.play();
    })
    .catch( (e) => {
      // eslint-disable-next-line no-console
      console.log("Something went wrong!" + e.message);
    });
  }

}
