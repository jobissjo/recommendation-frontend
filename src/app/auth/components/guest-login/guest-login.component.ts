import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {  MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-guest-login',
  imports: [MatFormFieldModule, MatButtonModule, MatInputModule,
    MatIconModule, MatCardModule, FormsModule,
    ReactiveFormsModule, CommonModule,
    MatProgressSpinnerModule, RouterModule
  ],
  templateUrl: './guest-login.component.html',
  styleUrl: './guest-login.component.scss'
})
export class GuestLoginComponent {
  guestLoginForm: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.guestLoginForm = this.fb.group({
      name: ['', Validators.required],
      secretKey: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.guestLoginForm.valid) {
      this.isLoading = true;
      
     

      setTimeout(() => {
        this.isLoading = false;
        this.router.navigate(['/']);
      }, 2000);
    }
  }

}
