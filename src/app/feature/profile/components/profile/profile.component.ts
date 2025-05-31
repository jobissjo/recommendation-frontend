import { Component } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { ProfileSidebarComponent } from '../profile-sidebar/profile-sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProfileMainComponent } from '../profile-main/profile-main.component';
import { PreferencesComponent } from '../preferences/preferences.component';
import { SettingsComponent } from '../settings/settings.component';
import { SecurityComponent } from '../security/security.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-profile',
  imports: [MatInputModule, ProfileSidebarComponent, ProfileMainComponent, PreferencesComponent, SettingsComponent, SecurityComponent, MatSidenavModule, MatMenuModule, MatIconModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  
  selectedSection = 'profile';
  isSidebarOpen = true;

  onSectionChange(section: string) {
    this.selectedSection = section;
  }

  

}
