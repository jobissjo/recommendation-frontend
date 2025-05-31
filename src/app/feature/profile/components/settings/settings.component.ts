
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-settings',
  imports: [MatCardModule, MatSlideToggleModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatDividerModule, ReactiveFormsModule, MatSelectModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

  settingsForm: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.settingsForm = this.fb.group({
      account: this.fb.group({
        email: [''],
        password: [''],
        twoFactorAuth: [false]
      }),
      privacy: this.fb.group({
        profileVisibility: ['public'],
        activityVisibility: ['friends'],
        searchable: [true]
      }),
      notifications: this.fb.group({
        emailNotifications: [true],
        pushNotifications: [true],
        activityAlerts: [true]
      })
    });
  }

  onSubmit() {
    if (this.settingsForm.valid) {
      console.log(this.settingsForm.value);
      // Handle form submission
    }
  }

}
