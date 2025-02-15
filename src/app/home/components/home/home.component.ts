import { Component } from '@angular/core';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { HeroComponent } from '../hero/hero.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { RecommendationListComponent } from '../recommendation-list/recommendation-list.component';
import { TestimonialComponent } from '../testimonial/testimonial.component';

@Component({
    selector: 'app-home',
    imports: [HeaderComponent, FooterComponent, HeroComponent, SearchBarComponent, RecommendationListComponent, 
        TestimonialComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {

}
