import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _theme = new BehaviorSubject<string>('light');
  private _language = new BehaviorSubject<string>('english');

  theme$ = this._theme.asObservable();
  language$ = this._language.asObservable();

  constructor() {
    console.log('service created');
  }

  toggleTheme(): void {
    if (this._theme.value === 'light') {
      this._theme.next('dark');
    } else {
      this._theme.next('light');
    }
  }
}
