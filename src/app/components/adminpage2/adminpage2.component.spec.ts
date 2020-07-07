import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminpage2Component } from './adminpage2.component';

describe('Adminpage2Component', () => {
  let component: Adminpage2Component;
  let fixture: ComponentFixture<Adminpage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Adminpage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Adminpage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
