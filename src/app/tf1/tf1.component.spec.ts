import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tf1Component } from './tf1.component';

describe('Tf1Component', () => {
  let component: Tf1Component;
  let fixture: ComponentFixture<Tf1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tf1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tf1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
