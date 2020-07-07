import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminpage1Component } from './adminpage1.component';

describe('Adminpage1Component', () => {
  let component: Adminpage1Component;
  let fixture: ComponentFixture<Adminpage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Adminpage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Adminpage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
