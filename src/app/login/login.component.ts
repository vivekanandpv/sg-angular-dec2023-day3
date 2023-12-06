import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('form submitted', form.value);
    } else {
      alert('invalid form');
    }
  }
}
