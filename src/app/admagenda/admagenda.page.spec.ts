import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmagendaPage } from './admagenda.page';

describe('AdmagendaPage', () => {
  let component: AdmagendaPage;
  let fixture: ComponentFixture<AdmagendaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmagendaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmagendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
