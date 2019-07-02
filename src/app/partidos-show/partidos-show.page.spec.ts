import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidosShowPage } from './partidos-show.page';

describe('PartidosShowPage', () => {
  let component: PartidosShowPage;
  let fixture: ComponentFixture<PartidosShowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartidosShowPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidosShowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
