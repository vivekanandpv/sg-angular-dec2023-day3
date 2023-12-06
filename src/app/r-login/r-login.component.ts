import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-r-login',
  templateUrl: './r-login.component.html',
  styleUrls: ['./r-login.component.scss'],
})
export class RLoginComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      username: [
        null,
        [Validators.required, Validators.email, this.validateSync.bind(this)],
      ],
      password: [null, [Validators.required], [this.validateAsync.bind(this)]],
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

  validateSync(ctrl: AbstractControl): null | ValidationErrors {
    const value = ctrl.value;

    if (value && value.length < 8) {
      return {
        my_error: true,
      };
    } else {
      return null;
    }
  }

  validateAsync(ctrl: AbstractControl): Observable<null | ValidationErrors> {
    const value = ctrl.value;

    if (value && value.length < 8) {
      return of({
        my_async_error: true,
      });
    } else {
      return of(null);
    }
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
