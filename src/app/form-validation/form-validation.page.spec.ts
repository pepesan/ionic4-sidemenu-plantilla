import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidationPage } from './form-validation.page';

describe('FormValidationPage', () => {
  let component: FormValidationPage;
  let fixture: ComponentFixture<FormValidationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValidationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
