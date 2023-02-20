import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenShotUploadComponent } from './screen-shot-upload.component';

describe('ScreenShotUploadComponent', () => {
  let component: ScreenShotUploadComponent;
  let fixture: ComponentFixture<ScreenShotUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenShotUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenShotUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
