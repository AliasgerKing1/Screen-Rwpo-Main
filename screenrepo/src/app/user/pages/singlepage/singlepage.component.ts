import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UploadFileService } from 'src/app/services/upload-file.service';

@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.scss'],
})
export class SinglepageComponent {
  id: any;
  allImages: any = [];
  comp_name: any;

  allCompImages: any = [];
  brand: string = 'screenRepo';
  constructor(
    private _router: Router,
    private actroute: ActivatedRoute,
    private _upload: UploadFileService
  ) {
    this.id = this.actroute.snapshot.paramMap.get('id');
    this._upload.getImagesById(this.id).subscribe((result) => {
      this.allImages = result;
    });

    this._upload.getComp('five Cents').subscribe((result) => {
      this.allCompImages = result;
    });
  }

  redirect() {
    this._router.navigate(['/']);
  }
  redirect2(id: any) {
    this._router.navigate(['/screenShot/' + id]);
  }
}
