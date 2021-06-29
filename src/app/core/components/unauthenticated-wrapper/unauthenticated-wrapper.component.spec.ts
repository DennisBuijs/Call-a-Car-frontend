import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthenticatedWrapperComponent } from './unauthenticated-wrapper.component';

describe('UnauthenticatedWrapperComponent', () => {
  let component: UnauthenticatedWrapperComponent;
  let fixture: ComponentFixture<UnauthenticatedWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnauthenticatedWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthenticatedWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
