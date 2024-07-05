import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { ThemeService } from '../../theme.service';
import { TranslateService } from '@ngx-translate/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor(public themeService: ThemeService, private translate: TranslateService, private cdr: ChangeDetectorRef, private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.themeService.currentMode.subscribe(isNightMode => {
      if (isNightMode) {
        document.body.classList.add('night-mode');
        document.body.classList.remove('day-mode');
        document.querySelector('.navbar')?.classList.add('night-mode');
        document.querySelector('.navbar')?.classList.remove('day-mode');
      } else {
        document.body.classList.add('day-mode');
        document.body.classList.remove('night-mode');
        document.querySelector('.navbar')?.classList.add('day-mode');
        document.querySelector('.navbar')?.classList.remove('night-mode');
      }
    });
  }

  ngAfterViewInit() {
    const leftColumn = document.getElementById('leftColumn');
    const rightColumn = document.getElementById('rightColumn');

    const observerOptions = {
      root: null,
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (leftColumn) {
      observer.observe(leftColumn);
    }
    if (rightColumn) {
      observer.observe(rightColumn);
    }
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  switchLanguage(language: string) {
    console.log('Switching language to:', language);
    this.translate.use(language).subscribe(() => {
      console.log('Language switched to:', language);
      this.cdr.detectChanges(); // Manually trigger change detection
    });
  }

  scrollToSection(section: string) {
    this.viewportScroller.scrollToAnchor(section);
  }
}
