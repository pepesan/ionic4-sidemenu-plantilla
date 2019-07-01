import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaParametroPage } from './ruta-parametro.page';

describe('RutaParametroPage', () => {
  let component: RutaParametroPage;
  let fixture: ComponentFixture<RutaParametroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaParametroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaParametroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
