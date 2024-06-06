/* tslint:disable:no-unused-variable */
import {  ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StockPatentsComponent } from './stock-patents.component';

describe('StockPatentsComponent', () => {
  let component: StockPatentsComponent;
  let fixture: ComponentFixture<StockPatentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockPatentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockPatentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
