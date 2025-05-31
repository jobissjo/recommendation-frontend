
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-guest-register',
  imports: [MatFormFieldModule, MatButtonModule, MatInputModule, ReactiveFormsModule, MatCheckboxModule, MatProgressSpinnerModule, RouterModule, MatCardModule, MatIconModule],
  templateUrl: './guest-register.component.html',
  styleUrl: './guest-register.component.scss'
})
export class GuestRegisterComponent {
  guestForm: FormGroup;
  isLoading:boolean = false;

  constructor(private readonly fb: FormBuilder, private readonly router: Router) {
    this.guestForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.guestForm.valid) {
      this.isLoading = true;
      // Generate secret key
      
      // Show secret key to user (you might want to use a dialog for this)
     

      setTimeout(() => {
        this.isLoading = false;
        this.router.navigate(['/auth/guest-login']);
      }, 2000);
    }
  }

}
