import { Component, Renderer2 } from '@angular/core';

import { LayoutService } from '../../../core/services/layout.service';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-header',
    imports: [
      MatIconModule,
      RouterModule
      // LayoutService
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isDarkMode: boolean = false;
  website_name:string = "Recomender";
  // layoutService: LayoutService = inject(LayoutService);

  constructor(
    public layoutService: LayoutService, 
    private readonly renderer:Renderer2
  ){}


  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.applyTheme();
  }

  applyTheme(): void {
    if (this.isDarkMode) {
      this.renderer.addClass(document.body, 'dark-mode');
      this.renderer.removeClass(document.body, 'light-mode');
    } else {
      this.renderer.addClass(document.body, 'light-mode');
      this.renderer.removeClass(document.body, 'dark-mode');
    }
  }
  recommendationToggle(){

  }
  

 
    
    
}

