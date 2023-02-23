import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollRestrictModalComponent } from './scroll-restrict-modal.component';

describe('ScrollRestrictModalComponent', () => {
  let component: ScrollRestrictModalComponent;
  let fixture: ComponentFixture<ScrollRestrictModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollRestrictModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollRestrictModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
