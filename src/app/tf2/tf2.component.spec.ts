import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tf2Component } from './tf2.component';

describe('Tf2Component', () => {
  let component: Tf2Component;
  let fixture: ComponentFixture<Tf2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tf2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tf2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
