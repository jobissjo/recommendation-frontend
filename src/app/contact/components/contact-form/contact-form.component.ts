
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      // Here you would typically send the form data to your backend
      console.log(this.contactForm.value);
      this.snackBar.open('Message sent successfully!', 'Close', {
        duration: 3000,
        horizontalPosition: 'end',
        verticalPosition: 'top'
      });
      this.contactForm.reset();
    }
  }

}
