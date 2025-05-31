import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  imports: [MatFormFieldModule, MatButtonModule, MatInputModule, MatIconModule, MatCardModule, ReactiveFormsModule, MatProgressSpinnerModule, RouterModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss', './../auth.common.style.scss']
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;
  isLoading = false;
  otpSent = false;

  constructor(private readonly fb: FormBuilder, private readonly router: Router) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      otp: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
    });
  }

  onSendOTP() {
    if (this.forgotPasswordForm.get('email')?.valid) {
      this.isLoading = true;
      // Implement your OTP sending logic here
      setTimeout(() => {
        this.isLoading = false;
        this.otpSent = true;
      }, 1500);
    }
  }

  onVerifyOTP() {
    if (this.forgotPasswordForm.valid) {
      this.isLoading = true;
      // Implement your OTP verification logic here
      setTimeout(() => {
        this.isLoading = false;
        this.router.navigate(['/auth/reset-password']);
      }, 1500);
    }
  }

}
