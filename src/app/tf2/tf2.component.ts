import { Component } from '@angular/core';

@Component({
  selector: 'app-tf2',
  templateUrl: './tf2.component.html',
  styleUrls: ['./tf2.component.scss'],
})
export class Tf2Component {
  form = {
    name: 'Radha',
    city: 'Bengaluru',
    newsletter: true,
    description: 'I am learning Angular Forms',
    exercise: '3 times a week',
  };

  onSubmit() {
    console.log(this.form);
  }
}
