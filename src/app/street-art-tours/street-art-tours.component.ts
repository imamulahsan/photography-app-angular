import { Component, OnInit } from '@angular/core';

interface Image {
  url: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-street-art-tours',
  templateUrl: './street-art-tours.component.html',
  styleUrls: ['./street-art-tours.component.css']
})
export class StreetArtToursComponent implements OnInit {
  images: Image[] = [];
  currentImageIndex: number = 0; // Start from the first image

  constructor() { }

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages() {
    // Load initial set of images with titles and descriptions
    for (let i = 1; i <= 5; i++) {
      this.images.push({
        url: `assets/images/live-${i}.jpg`,
        title: `Title ${i}`,
        description: `Description for image ${i}`
      });
    }
  }

  onScroll(event: WheelEvent) {
    if (event.deltaY > 0) {
      // Scrolling down
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    } else {
      // Scrolling up
      this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    }
  }
}
