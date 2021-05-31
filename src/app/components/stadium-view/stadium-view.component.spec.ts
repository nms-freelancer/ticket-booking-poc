import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StadiumViewComponent } from './stadium-view.component';

describe('StadiumViewComponent', () => {
  let component: StadiumViewComponent;
  let fixture: ComponentFixture<StadiumViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StadiumViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StadiumViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
