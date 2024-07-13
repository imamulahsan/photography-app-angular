import { Component } from '@angular/core';

@Component({
  selector: 'app-graffiti',
  templateUrl: './graffiti.component.html',
  styleUrl: './graffiti.component.css'
})
export class GraffitiComponent {

  images = [
    { src: 'assets/images/carousal-1.jpg', size: 'large' },
    { src: 'assets/images/caroural-2.jpg', size: 'medium' },
    { src: 'assets/images/carousal-3.jpg', size: 'small' },
    { src: 'assets/images/carousal-4.jpg', size: 'medium' },
    { src: 'assets/images/carousal-5.jpg', size: 'large' },
    
    // Add more images as needed
  ];

  constructor() {}

}
