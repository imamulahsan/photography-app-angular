import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-live-painting',
  templateUrl: './live-painting.component.html',
  styleUrls: ['./live-painting.component.css']
})
export class LivePaintingComponent implements OnInit {

  events = [
    {
      title: 'EVENT_ABSTRACT_DESIGNS',
      date: '2024-04-26',
      description: 'EVENT_DESCRIPTION_ABSTRACT_DESIGNS',
      location: 'EVENT_LOCATION_HAMBURG',
      image: 'assets/images/live-1.jpg',
      liked: false
    },
    {
      title: 'EVENT_FACE_ART',
      date: '2024-05-18',
      description: 'EVENT_DESCRIPTION_FACE_ART',
      location: 'EVENT_LOCATION_BERLIN_CONVENTION',
      image: 'assets/images/live-2.jpg',
      liked: false
    },
    {
      title: 'EVENT_ANIMALS',
      date: '2024-01-02',
      description: 'EVENT_DESCRIPTION_ANIMALS',
      location: 'EVENT_LOCATION_BERLIN_ZOO',
      image: 'assets/images/live-3.jpg',
      liked: false
    },
    {
      title: 'EVENT_CALLIGRAPHY',
      date: '2024-04-26',
      description: 'EVENT_DESCRIPTION_CALLIGRAPHY',
      location: 'EVENT_LOCATION_MUNICH_ART_MUSEUM',
      image: 'assets/images/live-4.jpg',
      liked: false
    },
    {
      title: 'EVENT_NATURE',
      date: '2024-07-15',
      description: 'EVENT_DESCRIPTION_NATURE',
      location: 'EVENT_LOCATION_FRANKFURT_BOTANICAL',
      image: 'assets/images/live-5.jpg',
      liked: false
    },
    {
      title: 'EVENT_LOVE',
      date: '2024-11-30',
      description: 'EVENT_DESCRIPTION_LOVE',
      location: 'EVENT_LOCATION_COLOGNE_CARET',
      image: 'assets/images/live-6.jpg',
      liked: false
    }
  ];
  constructor(private snackBar: MatSnackBar, private translate: TranslateService) {
    translate.setDefaultLang('en');
   }

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
