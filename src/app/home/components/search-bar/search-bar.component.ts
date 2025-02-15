import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'app-search-bar',
  imports: [MatFormFieldModule, MatButtonToggleModule, MatInputModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  onSearch(event:any){

  }
  onFilterChange(event:any){

  }

}
