import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterModule, ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatCheckboxModule, MatIconModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', './../auth.component.scss']
})
export class RegisterComponent {
  constructor(private readonly fb:FormBuilder) { }
  registerForm!: FormGroup;
  isCheck: boolean = false;
  isLoading = false;
  hideConfirmPassword = true;
  hidePassword = true;


  ngOnInit(): void {
    this.registerForm = this.fb.group<{
      name: FormControl<string | null>;
      email: FormControl<string | null>;
      password: FormControl<string | null>;
      cPassword: FormControl<string | null>;
      isCheck: FormControl<boolean | null>;
    }>({
      name: new FormControl('', { validators: [Validators.required], nonNullable: true }),
      email: new FormControl('', { validators: [Validators.required, Validators.email], nonNullable: true }),
      password: new FormControl('', { validators: [Validators.required, Validators.minLength(6)], nonNullable: true }),
      cPassword: new FormControl('', { validators: [Validators.required], nonNullable: true }),
      isCheck: new FormControl(false, { validators: [Validators.requiredTrue], nonNullable: true })
    }, {
      validators: this.passwordMatchValidator
    });
  }

  private passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get('password');
      const confirmPassword = control.get('cPassword');

      if (!password || !confirmPassword) {
        return null;
      }

      return password.value === confirmPassword.value ? null : { mismatch: true };
    };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.isLoading = true;
      // Add your registration logic here
      console.log(this.registerForm.value);

      setTimeout(() => {
        this.isLoading = true;
      }, 1000);
    }
  }

  onKeyPress(event: any) {
    if (event.keyCode === 13) {
      this.onSubmit();
    }
  }

}
