import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivePaintingComponent } from './live-painting.component';

describe('LivePaintingComponent', () => {
  let component: LivePaintingComponent;
  let fixture: ComponentFixture<LivePaintingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LivePaintingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LivePaintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
