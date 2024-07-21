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
    { year: '2009', content: 'TIMELINE_2009', isActive: true },
    { year: '2018', content: 'TIMELINE_2018', isActive: true },
    // Add more timeline events as needed
  ];

  services = [
    {
      title: 'Graffiti_Art_Title',
      description: 'Graffiti_Art_Description',
      image: 'assets/images/graffiti.jpg',
      path: 'graffiti'
    },
    {
      title: 'Live_Painting_Events_Title',
      description: 'Live_Painting_Events_Description',
      image: 'assets/images/live-art.jpg',
      path: 'live-painting'
    },
    {
      title: 'Street_Art_Tours_Title',
      description: 'Street_Art_Tours_Description',
      image: 'assets/images/street-art.jpg',
      path: 'street-art-tours'
    },
  ];

 

  constructor() {}


}
