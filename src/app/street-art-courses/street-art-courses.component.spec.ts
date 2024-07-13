import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetArtCoursesComponent } from './street-art-courses.component';

describe('StreetArtCoursesComponent', () => {
  let component: StreetArtCoursesComponent;
  let fixture: ComponentFixture<StreetArtCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StreetArtCoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StreetArtCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
