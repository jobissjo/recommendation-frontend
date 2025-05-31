import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatButtonModule, MatInputModule, MatIconModule, MatCardModule, FormsModule, ReactiveFormsModule, MatCheckboxModule, MatProgressSpinnerModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', './../auth.component.scss' ]
})
export class LoginComponent {
  loginForm: FormGroup;
  hidePassword = true;
  isLoading = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Handle login logic here
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.router.navigate(['/']);
      }, 2000);
    }
  }

}
