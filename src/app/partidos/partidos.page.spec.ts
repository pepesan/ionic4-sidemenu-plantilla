import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidosPage } from './partidos.page';

describe('PartidosPage', () => {
  let component: PartidosPage;
  let fixture: ComponentFixture<PartidosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartidosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
