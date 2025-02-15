import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatButtonModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', './../auth.component.scss' ]
})
export class LoginComponent {
  email:string = ''
  password:string = ''
  checked: boolean = false;

}
