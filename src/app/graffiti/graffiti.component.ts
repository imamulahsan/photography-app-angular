import { Component } from '@angular/core';

@Component({
  selector: 'app-graffiti',
  templateUrl: './graffiti.component.html',
  styleUrls: ['./graffiti.component.css']
})
export class GraffitiComponent {

  images: { src: string, size: 'large' | 'medium' | 'small', title: string, artist: string }[] = [
    { src: 'assets/images/graffiti-1.jpg', size: 'large', title: 'Artwork 1', artist: 'Artist 1' },
    { src: 'assets/images/graffiti-2.jpg', size: 'medium', title: 'Artwork 2', artist: 'Artist 2' },
    { src: 'assets/images/graffiti-3.jpg', size: 'small', title: 'Artwork 3', artist: 'Artist 3' },
    { src: 'assets/images/graffiti-4.jpg', size: 'small', title: 'Artwork 4', artist: 'Artist 4' },
    { src: 'assets/images/graffiti-5.jpg', size: 'small', title: 'Artwork 5', artist: 'Artist 5' },
    { src: 'assets/images/graffiti-6.jpg', size: 'small', title: 'Artwork 6', artist: 'Artist 6' },
    { src: 'assets/images/graffiti-7.jpg', size: 'small', title: 'Artwork 7', artist: 'Artist 7' },
    { src: 'assets/images/graffiti-8.jpg', size: 'small', title: 'Artwork 8', artist: 'Artist 8' },
    { src: 'assets/images/graffiti-9.jpg', size: 'large', title: 'Artwork 9', artist: 'Artist 9' },
    { src: 'assets/images/graffiti-10.jpg', size: 'small', title: 'Artwork 10', artist: 'Artist 10' },
    { src: 'assets/images/graffiti-11.jpg', size: 'small', title: 'Artwork 11', artist: 'Artist 11' },
  ];

  selectedImage: { src: string, size: 'large' | 'medium' | 'small', title: string, artist: string } | null = null;

  constructor() {}

  openModal(image: { src: string, size: 'large' | 'medium' | 'small', title: string, artist: string }): void {
    this.selectedImage = image;
  }

  closeModal(): void {
    this.selectedImage = null;
  }
}
