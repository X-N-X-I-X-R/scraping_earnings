/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Today_newsComponent } from './Today_news.component';

describe('Today_newsComponent', () => {
  let component: Today_newsComponent;
  let fixture: ComponentFixture<Today_newsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Today_newsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Today_newsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
