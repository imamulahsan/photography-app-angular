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
 

  constructor() {}
}
