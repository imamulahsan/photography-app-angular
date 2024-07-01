import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ThemeService } from '../../theme.service';
import { TranslateService } from '@ngx-translate/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
