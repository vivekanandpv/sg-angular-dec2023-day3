import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-r-login',
  templateUrl: './r-login.component.html',
  styleUrls: ['./r-login.component.scss'],
})
export class RLoginComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      username: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      checkMeOut: [false],
    });
  }

  get username(): FormControl {
    return this.form.controls['username'] as FormControl;
  }

  get password(): FormControl {
    return this.form.controls['password'] as FormControl;
  }

  get checkMeOut(): FormControl {
    return this.form.controls['checkMeOut'] as FormControl;
  }

  onSubmit() {
    this.form.markAsDirty();

    if (this.form.valid) {
      console.log('form data', this.form.value);
    } else {
      alert('Invalid form');
    }
  }
}
