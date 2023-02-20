import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelModalComponent } from './del-modal.component';

describe('DelModalComponent', () => {
  let component: DelModalComponent;
  let fixture: ComponentFixture<DelModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
