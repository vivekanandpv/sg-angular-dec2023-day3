import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { Person, PersonService } from './person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  person$?: Observable<Person>;
  constructor(private personService: PersonService) {
    this.person$ = this.personService.person$;
  }

  changeCity() {
    this.personService.changeCity({
      type: 'changeCity',
      payload: 'New York',
    });
  }
}
