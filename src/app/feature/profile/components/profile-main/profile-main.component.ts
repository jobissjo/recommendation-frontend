import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-profile-main',
  imports: [ MatIconModule, MatTabsModule,
    MatFormFieldModule, MatCardModule, ReactiveFormsModule, CommonModule,
    MatInputModule,],
  templateUrl: './profile-main.component.html',
  styleUrl: './profile-main.component.scss'
})
export class ProfileMainComponent {

  profileForm: FormGroup;
  isLoading: boolean = false;

  constructor(private readonly fb: FormBuilder) {
    this.profileForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      bio: [''],
      location: [''],
      preferences: this.fb.group({
        movieGenres: [''],
        bookGenres: [''],
        notificationEnabled: [true]
      })
    });
  }

  onSubmit() {
    console.log('Form submitted!');
  }

}
