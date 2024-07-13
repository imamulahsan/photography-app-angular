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

  timelineEvents = [
    { year: '2004', content: 'TIMELINE_2004', isActive: true},
    { year: '2007', content: 'TIMELINE_2007', isActive: true },
    { year: '2007', content: 'TIMELINE_2007', isActive: true },
    { year: '2007', content: 'TIMELINE_2007', isActive: true },
    { year: '2007', content: 'TIMELINE_2007', isActive: true },
    // Add more timeline events as needed
  ];

  services = [
    {
      title: 'Graffiti Art',
      description: 'Custom graffiti designs for private and public clients.',
      image: 'assets/images/graffiti.jpg',
      path: 'graffiti'
    },
    {
      title: 'Live Painting Events',
      description: 'Live art creation for corporate events, product launches, and team-building activities.',
      image: 'assets/images/live-art.jpg',
      path: 'live-painting'
    },
    {
      title: 'Street Art Tours',
      description: 'Tours of famous street art locations in German cities, providing historical context and artist insights.',
      image: 'assets/images/street-art.jpg',
      path: 'street-art-tours'
    },
    {
      title: 'Street Art Courses',
      description: 'Workshops on the history and techniques of street art for schools and interested groups.',
      image: 'assets/images/art-course.jpg',
      path: 'street-art-courses'
    }
  ];
 

  constructor() {}


}
