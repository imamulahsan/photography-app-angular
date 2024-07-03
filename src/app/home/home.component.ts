import { Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  images = [
    'assets/images/carousal-1.jpg',
    'assets/images/carousal-2.jpg',
    'assets/images/carousal-3.jpg'
  ];

  services = [
    {
      title: 'Graffiti Art',
      description: 'Custom graffiti designs for private and public clients.',
      price: '$120',
      image: 'assets/images/wedding.jpg'
    },
    {
      title: 'Live Painting Events',
      description: 'Live art creation for corporate events, product launches, and team-building activities.',
      price: '$90',
      image: 'assets/images/engagement.jpg'
    },
    {
      title: ' Street Art Tours',
      description: 'Tours of famous street art locations in German cities, providing historical context and artist insights.',
      price: '$120',
      image: 'assets/images/birthday.jpg'
    },
    {
      title: 'Street Art Courses',
      description: 'Workshops on the history and techniques of street art for schools and interested groups.',
      price: '$100',
      image: 'assets/images/portrait.jpg'
    }
  ];
 

  constructor() {}
}
