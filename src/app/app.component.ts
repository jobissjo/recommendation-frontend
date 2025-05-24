import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './shared/components/footer/footer.component';
import { filter } from 'rxjs';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, CommonModule, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'recommendation-frontend';
  isAuthRoute: boolean = true;
  constructor(private readonly router: Router) {
    
  }
  ngOnInit() {

    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      this.isAuthRoute = this.router.url.startsWith('/auth');
    });
  }

  // isAuthRoute(): boolean {
  //   return this.router.url.startsWith('/auth');
  // }
}
