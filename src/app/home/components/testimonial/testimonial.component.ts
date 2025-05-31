
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-testimonial',
  imports: [MatCardModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {
  reviews: {feedback:string,name:string }[] = [
    { feedback: 'I absolutely adore this app! It helps me find new books and movies to enjoy.', name: 'John Doe' },
    { feedback: 'This app is really helpful for finding books and movies to watch.', name: 'Jane Smith' },
    { feedback: 'I enjoy using this app to discover new movies and books.', name: 'David Johnson' },
    { feedback: 'This app is so helpful for finding new movies and books to watch.', name: 'Emily Brown' },
    { feedback: 'I absolutely love this app! It helps me find new books and movies to enjoy.', name: 'Michael Williams' },
    { feedback: 'This app is really helpful for finding books and movies to watch.', name: 'Sarah Davis' },
    { feedback: 'I enjoy using this app to discover new movies and books.', name: 'Daniel Lee' },
  ];

}
