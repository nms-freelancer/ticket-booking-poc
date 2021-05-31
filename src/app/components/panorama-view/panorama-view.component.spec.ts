import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoramaViewComponent } from './panorama-view.component';

describe('PanoramaViewComponent', () => {
  let component: PanoramaViewComponent;
  let fixture: ComponentFixture<PanoramaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanoramaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanoramaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
