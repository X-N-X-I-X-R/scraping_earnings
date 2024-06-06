/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Market_dataComponent } from './market_data.component';

describe('Market_dataComponent', () => {
  let component: Market_dataComponent;
  let fixture: ComponentFixture<Market_dataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Market_dataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Market_dataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
