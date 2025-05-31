
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface LoginHistory {
  date: string;
  device: string;
  location: string;
  status: string;
}

@Component({
  selector: 'app-security',
  imports: [MatCardModule, MatFormFieldModule, ReactiveFormsModule, MatTableModule, MatSlideToggleModule, MatInputModule, MatDividerModule, MatIconModule, MatButtonModule],
  templateUrl: './security.component.html',
  styleUrl: './security.component.scss'
})
export class SecurityComponent {

  securityForm!: FormGroup;
  displayedColumns: string[] = ['date', 'device', 'location', 'status'];
  loginHistory: LoginHistory[] = [
    { date: '2024-01-20 10:30', device: 'Windows PC', location: 'New York, USA', status: 'Success' },
    { date: '2024-01-19 15:45', device: 'iPhone 13', location: 'New York, USA', status: 'Success' },
    { date: '2024-01-18 08:20', device: 'MacBook Pro', location: 'Boston, USA', status: 'Failed' }
  ];

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.securityForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      twoFactorEnabled: [false],
      recoveryEmail: ['', [Validators.email]]
    });
  }

  onSubmit() {
    if (this.securityForm.valid) {
      console.log(this.securityForm.value);
      // Handle form submission
    }
  }

}
