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
      title: 'Weddings',
      description: 'Have a worry-free wedding day from start to finish with our services. Our team will handle all your needs.',
      price: '$120',
      image: 'assets/images/wedding.jpg'
    },
    {
      title: 'Engagements',
      description: 'Engagement sessions allow you to get up close and personal with your photographer, which will help you feel more comfortable.',
      price: '$90',
      image: 'assets/images/engagement.jpg'
    },
    {
      title: 'Birthdays',
      description: 'Why not add a little flair to your next event? Let our photographers capture the perfect moments of your special day.',
      price: '$120',
      image: 'assets/images/birthday.jpg'
    },
    {
      title: 'Portraits',
      description: 'Your family and your business are so important to you, which is why we take timeless portraits that you will cherish forever.',
      price: '$100',
      image: 'assets/images/portrait.jpg'
    }
  ];
 

  constructor() {}
}
