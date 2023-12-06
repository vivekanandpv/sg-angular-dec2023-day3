import { Component } from '@angular/core';

@Component({
  selector: 'app-tf1',
  templateUrl: './tf1.component.html',
  styleUrls: ['./tf1.component.scss'],
})
export class Tf1Component {
  onSubmitHandler(form: any) {
    console.log('Form posted', form);
  }
}
