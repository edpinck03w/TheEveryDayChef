import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminpage3Component } from './adminpage3.component';

describe('Adminpage3Component', () => {
  let component: Adminpage3Component;
  let fixture: ComponentFixture<Adminpage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Adminpage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Adminpage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
