
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-recommendation-list',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './recommendation-list.component.html',
  styleUrl: './recommendation-list.component.scss'
})
export class RecommendationListComponent {
  @Input() items: any[] = [];
  filteredItems: any[] = [];

  ngOnChanges() {
    this.filteredItems = this.items;
  }
}
