import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { ToggleButton } from 'primeng/togglebutton';
import { FormsModule } from '@angular/forms';
import {  MenuModule } from 'primeng/menu';


@Component({
    selector: 'app-header',
    imports: [ToolbarModule, ButtonModule, ToggleButton, FormsModule, MenuModule
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isDarkMode: boolean = false;

  toggleDarkMode(){
    this.isDarkMode = true
  }
  profileMenuItems = [
    { label: 'Profile', icon: 'pi pi-user' },
    { label: 'Login', icon: 'pi pi-sign-in' }
  ];
}
