import { Component, HostListener } from '@angular/core';

import { Router } from '@angular/router';
import { UploadFileService } from 'src/app/services/upload-file.service';

@Component({
  selector: 'app-screenshot',
  templateUrl: './screenshot.component.html',
  styleUrls: ['./screenshot.component.scss'],
})
export class ScreenshotComponent {
  private readonly SCROLL_DISTANCE = 1000; // Change this value to adjust the scroll distance

  showScrollRestrictModal = false;

  @HostListener('window:scroll')
  onScroll() {
    if (window.pageYOffset > this.SCROLL_DISTANCE) {
      this.showScrollRestrictModal = true;
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      this.showScrollRestrictModal = false;
      document.body.style.overflow = 'auto'; // Enable scrolling
    }
  }

  id: any;

  allImages: any = [];
  constructor(private _router: Router, private _upload: UploadFileService) {
    this._upload.getImages().subscribe((result) => {
      this.allImages = [result][0];
    });
  }

  redirect(id: any) {
    this._router.navigate(['/screenShot/' + id]);
  }
}
