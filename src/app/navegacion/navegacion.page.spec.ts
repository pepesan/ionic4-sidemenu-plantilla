import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacionPage } from './navegacion.page';

describe('NavegacionPage', () => {
  let component: NavegacionPage;
  let fixture: ComponentFixture<NavegacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavegacionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
