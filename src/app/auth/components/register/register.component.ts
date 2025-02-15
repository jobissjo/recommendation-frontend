import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterModule,
    ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatInputModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', './../auth.component.scss']
})
export class RegisterComponent {
  constructor(private readonly fb:FormBuilder) { }
  registerForm!: FormGroup;
  isCheck: boolean = false;
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: [''],
      password: [''],
      cPassword: [''],
      isCheck:['']
    })
  }

  onSubmit() {
    console.log(this.registerForm);
    
  }

  onKeyPress(event: any) {
    if (event.keyCode === 13) {
      this.onSubmit();
    }
  }

}
