import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tf1Component } from './tf1/tf1.component';
import { Tf2Component } from './tf2/tf2.component';
import { RLoginComponent } from './r-login/r-login.component';
import { DFormComponent } from './d-form/d-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    LoginComponent,
    Tf1Component,
    Tf2Component,
    RLoginComponent,
    DFormComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
