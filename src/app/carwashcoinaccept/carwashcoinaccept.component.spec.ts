import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarwashcoinacceptComponent } from './carwashcoinaccept.component';

describe('CarwashcoinacceptComponent', () => {
  let component: CarwashcoinacceptComponent;
  let fixture: ComponentFixture<CarwashcoinacceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarwashcoinacceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarwashcoinacceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
