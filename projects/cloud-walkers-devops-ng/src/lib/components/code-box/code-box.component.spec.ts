/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CCodeBoxComponent } from './code-box.component';

describe('CodeBoxComponent', () => {
  let component: CCodeBoxComponent;
  let fixture: ComponentFixture<CCodeBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CCodeBoxComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCodeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
