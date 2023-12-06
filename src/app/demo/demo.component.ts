import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Person, PersonService } from '../person.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent {
  person$?: Observable<Person>;
  fullName$?: Observable<string>;

  constructor(private personService: PersonService) {
    this.person$ = this.personService.person$;
    this.fullName$ = this.personService.person$.pipe(
      map((p) => `${p.firstName} ${p.lastName}`)
    );
  }
}
