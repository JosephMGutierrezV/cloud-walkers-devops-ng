/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CToastComponent } from './toast.component';

describe('ToastComponent', () => {
  let component: CToastComponent;
  let fixture: ComponentFixture<CToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CToastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
