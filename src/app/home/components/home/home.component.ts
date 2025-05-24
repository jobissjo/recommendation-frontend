import { Component } from '@angular/core';

import { HeroComponent } from '../hero/hero.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { RecommendationListComponent } from '../recommendation-list/recommendation-list.component';
import { TestimonialComponent } from '../testimonial/testimonial.component';

@Component({
    selector: 'app-home',
    imports: [ HeroComponent, SearchBarComponent, RecommendationListComponent, 
        TestimonialComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {

}
