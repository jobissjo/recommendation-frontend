import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-profile-sidebar',
  imports: [CommonModule, MatIconModule, MatListModule,
    MatSidenavModule
  ],
  templateUrl: './profile-sidebar.component.html',
  styleUrl: './profile-sidebar.component.scss'
})
export class ProfileSidebarComponent {
  @Input() selectedSection = 'profile';
  @Input() userName = 'John Doe';
  @Input() userEmail = 'john.doe@example.com';
  @Input() avatarUrl = 'default-avatar.png';

  @Output() sectionChange = new EventEmitter<string>();

  onSectionChange(section: string) {
    this.sectionChange.emit(section);
  }

}
