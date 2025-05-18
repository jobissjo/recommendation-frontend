import { Component, Renderer2 } from '@angular/core';

import { LayoutService } from '../../../core/services/layout.service';
import {MatIconModule} from '@angular/material/icon';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from '../../../auth/services/auth.service';


@Component({
    selector: 'app-header',
    imports: [
      MatIconModule,
      RouterModule,
      RouterLink,
      RouterLinkActive,
      MatButtonModule,
      MatIconModule,
      MatMenuModule,
      MatToolbarModule,
      MatDividerModule,
      CommonModule,
      MatFormFieldModule
      // LayoutService
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isDarkMode: boolean = false;
  website_name:string = "Recomender";
  // layoutService: LayoutService = inject(LayoutService);
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor(
    public layoutService: LayoutService, 
    private readonly renderer:Renderer2,
    private readonly authService: AuthService,
    private readonly router: Router
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
  
  logout(){
    
    this.authService.logout();
    this.router.navigate(['/auth/login']);

  }

 
    
    
}

