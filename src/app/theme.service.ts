import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private nightMode = new BehaviorSubject<boolean>(false);
  currentMode = this.nightMode.asObservable();
  isNightMode = false;

  toggleTheme() {
    this.isNightMode = !this.isNightMode;
    this.nightMode.next(this.isNightMode);
  }
  constructor() { }
}
