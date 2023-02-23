import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictComponent } from './restrict.component';

describe('RestrictComponent', () => {
  let component: RestrictComponent;
  let fixture: ComponentFixture<RestrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestrictComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
