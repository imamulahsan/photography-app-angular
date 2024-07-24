import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-graffiti',
  templateUrl: './graffiti.component.html',
  styleUrls: ['./graffiti.component.css']
})
export class GraffitiComponent {

  images: { src: string, size: 'large' | 'medium' | 'small', title: string, artist: string }[] = [
    { src: 'assets/images/graffiti-1.jpg', size: 'large', title: 'GRAFFITI_MONGOLIAN_WOMAN', artist: 'Alex Becker' },
    { src: 'assets/images/graffiti-2.jpg', size: 'medium', title: 'GRAFFITI_BEACH_ROCK_ART', artist: 'Sophia Turner' },
    { src: 'assets/images/graffiti-3.jpg', size: 'small', title: 'GRAFFITI_RABBIT', artist: 'Liam Johnson' },
    { src: 'assets/images/graffiti-4.jpg', size: 'small', title: 'GRAFFITI_WOMAN_SCISSOR', artist: 'Emily Roberts' },
    { src: 'assets/images/graffiti-5.jpg', size: 'small', title: 'GRAFFITI_ALIEN_CREATURE', artist: 'Ethan Davis' },
    { src: 'assets/images/graffiti-6.jpg', size: 'small', title: 'GRAFFITI_HAND_SIGN_DOOR', artist: 'Chloe Wilson' },
    { src: 'assets/images/graffiti-7.jpg', size: 'small', title: 'GRAFFITI_ABSTRACT_ART', artist: 'Noah Martinez' },
    { src: 'assets/images/graffiti-8.jpg', size: 'small', title: 'GRAFFITI_COLOR_ART', artist: 'Ava Clark' },
    { src: 'assets/images/graffiti-9.jpg', size: 'large', title: 'GRAFFITI_BLACK_WOMAN', artist: 'William Rodriguez' },
    { src: 'assets/images/graffiti-10.jpg', size: 'small', title: 'GRAFFITI_SPACE_DOG', artist: 'Mason Lee' },
    { src: 'assets/images/graffiti-11.jpg', size: 'small', title: 'GRAFFITI_MESSI_LOOKALIKE', artist: 'Lucas Hernandez' }
];

  selectedImage: { src: string, size: 'large' | 'medium' | 'small', title: string, artist: string } | null = null;

  constructor(private translate: TranslateService) {}

  openModal(image: { src: string, size: 'large' | 'medium' | 'small', title: string, artist: string }): void {
    this.selectedImage = image;
  }

  closeModal(): void {
    this.selectedImage = null;
  }
}
