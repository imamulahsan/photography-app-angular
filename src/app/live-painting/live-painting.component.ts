import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-live-painting',
  templateUrl: './live-painting.component.html',
  styleUrls: ['./live-painting.component.css']
})
export class LivePaintingComponent implements OnInit {

  events = [
    {
      title: 'Abstract Designs',
      date: '2024-04-26',
      description: 'Liverpool',
      image: 'assets/images/live-1.jpg',
      liked: false
    },
    {
      title: 'Face Art',
      date: '2024-05-18',
      description: 'Berlin',
      image: 'assets/images/live-2.jpg',
      liked: false
    },
    {
      title: 'Nature and Animals',
      date: '2024-01-02',
      description: 'Prague',
      image: 'assets/images/live-3.jpg',
      liked: false
    },
    {
      title: 'Calligraphy',
      date: '2024-04-26',
      description: 'Munich',
      image: 'assets/images/live-4.jpg',
      liked: false
    },
    {
      title: 'Hernando Tejada. Return Journey',
      date: '2024-07-15',
      description: 'Caret',
      image: 'assets/images/live-5.jpg',
      liked: false
    },
    {
      title: 'Versión libre. Events in the MAMM Collection',
      date: '2024-11-30',
      description: 'Caret',
      image: 'assets/images/live-6.jpg',
      liked: false
    }
  ];

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onHeartClick(event: any): void {
    event.liked = !event.liked;
    if (event.liked) {
      this.snackBar.open('You liked this event', 'Close', {
        duration: 2000,
      });
    }
  }
}
