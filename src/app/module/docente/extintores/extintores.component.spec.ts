import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtintoresComponent } from './extintores.component';

describe('ExtintoresComponent', () => {
  let component: ExtintoresComponent;
  let fixture: ComponentFixture<ExtintoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtintoresComponent]
    });
    fixture = TestBed.createComponent(ExtintoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
