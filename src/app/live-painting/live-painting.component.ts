import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-painting',
  templateUrl: './live-painting.component.html',
  styleUrl: './live-painting.component.css'
})
export class LivePaintingComponent implements OnInit {

  events = [
    {
      title: 'Abstract Designs',
      date: 'April 26',
      description: 'Liverpool',
      image: 'assets/images/live-1.jpg'
    },
    {
      title: 'Face Art',
      date: 'May 18',
      description: 'Berlin',
      image: 'assets/images/live-2.jpg'
    },
    {
      title: 'Nature and Animals',
      date: 'January 2',
      description: 'Prague',
      image: 'assets/images/live-3.jpg'
    },
    {
      title: 'Calligraphy',
      date: 'April 26',
      description: 'Munich',
      image: 'assets/images/live-4.jpg'
    },
    {
      title: 'Hernando Tejada. Return Journey',
      date: 'Coming Soon',
      description: 'Caret',
      image: 'assets/images/live-5.jpg'
    },
    {
      title: 'Versión libre. Events in the MAMM Collection',
      date: 'Until 2024',
      description: 'Caret',
      image: 'assets/images/live-6.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
