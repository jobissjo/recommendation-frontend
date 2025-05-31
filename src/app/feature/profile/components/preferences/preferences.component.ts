
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
  selector: 'app-preferences',
  imports: [MatCardModule, MatSlideToggleModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatDividerModule, ReactiveFormsModule],
  templateUrl: './preferences.component.html',
  styleUrl: './preferences.component.scss'
})
export class PreferencesComponent {

  preferencesForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.preferencesForm = this.fb.group({
      theme: ['light'],
      notifications: this.fb.group({
        emailNotifications: [true],
        pushNotifications: [true],
        weeklyDigest: [true]
      }),
      content: this.fb.group({
        movieGenres: [''],
        bookGenres: [''],
        language: ['en'],
        contentMaturity: ['all']
      })
    });
  }

  onSubmit() {
    if (this.preferencesForm.valid) {
      console.log(this.preferencesForm.value);
      // Handle form submission
    }
  }

}
