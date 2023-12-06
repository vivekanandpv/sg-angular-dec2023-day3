import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Person {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
}

export interface ChangeCityAction {
  type: string;
  payload: string;
}

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private _person = new BehaviorSubject<Person>({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    city: 'Boston',
  });

  person$ = this._person.asObservable();

  constructor() {}

  changeCity(action: ChangeCityAction): void {
    if (action.type === 'changeCity') {
      const stateCopy = { ...this._person.value };
      stateCopy.city = action.payload;
      this._person.next(stateCopy);
    }
  }
}
