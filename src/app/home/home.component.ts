import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('cursor') cursor!: ElementRef;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.cursor.nativeElement.style.left = `${event.clientX}px`;
    this.cursor.nativeElement.style.top = `${event.clientY}px`;
  }

  constructor() {}
}
