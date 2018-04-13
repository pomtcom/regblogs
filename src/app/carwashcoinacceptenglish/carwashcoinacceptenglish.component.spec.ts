import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarwashcoinacceptenglishComponent } from './carwashcoinacceptenglish.component';

describe('CarwashcoinacceptenglishComponent', () => {
  let component: CarwashcoinacceptenglishComponent;
  let fixture: ComponentFixture<CarwashcoinacceptenglishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarwashcoinacceptenglishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarwashcoinacceptenglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
