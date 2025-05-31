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
  selector: 'app-reset-password',
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    RouterModule
],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss', './../auth.common.style.scss']
})
export class ResetPasswordComponent {
  resetPasswordForm: FormGroup;
  hidePassword = true;
  hideConfirmPassword = true;
  isLoading = false;


  constructor(private readonly fb: FormBuilder, private readonly router: Router) {
    this.resetPasswordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
      ? null : { 'mismatch': true };
  }

  onSubmit() {
    if (this.resetPasswordForm.valid) {
      this.isLoading = true;
      // Implement your password reset logic here
      setTimeout(() => {
        this.isLoading = false;
        this.router.navigate(['/auth/login']);
      }, 1500);
    }
  }

}
