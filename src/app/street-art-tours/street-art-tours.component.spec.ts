import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetArtToursComponent } from './street-art-tours.component';

describe('StreetArtToursComponent', () => {
  let component: StreetArtToursComponent;
  let fixture: ComponentFixture<StreetArtToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StreetArtToursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StreetArtToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
