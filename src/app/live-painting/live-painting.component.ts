import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-painting',
  templateUrl: './live-painting.component.html',
  styleUrl: './live-painting.component.css'
})
export class LivePaintingComponent implements OnInit {

  events = [
    {
      title: 'To Defy. Crossing the Sun from a Great Pacific',
      date: 'April 26 to September 1',
      description: 'Caret',
      image: 'path-to-image1.jpg'
    },
    {
      title: 'Kalabongó',
      date: 'April 26 to September 1',
      description: 'Caret',
      image: 'path-to-image2.jpg'
    },
    {
      title: 'Tania Candiani. Offering',
      date: 'April 26 to September 1',
      description: 'Caret',
      image: 'path-to-image3.jpg'
    },
    {
      title: 'Acoustic Fossil. Listening (With) the River',
      date: 'April 26 to September 1',
      description: 'Caret',
      image: 'path-to-image4.jpg'
    },
    {
      title: 'Hernando Tejada. Return Journey',
      date: 'April 26 to September 1',
      description: 'Caret',
      image: 'path-to-image5.jpg'
    },
    {
      title: 'Versión libre. Events in the MAMM Collection',
      date: 'Until 2024',
      description: 'Caret',
      image: 'path-to-image6.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
