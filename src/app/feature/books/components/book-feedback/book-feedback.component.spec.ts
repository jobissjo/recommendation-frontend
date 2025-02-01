import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFeedbackComponent } from './book-feedback.component';

describe('BookFeedbackComponent', () => {
  let component: BookFeedbackComponent;
  let fixture: ComponentFixture<BookFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookFeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
