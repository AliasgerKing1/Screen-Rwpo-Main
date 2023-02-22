import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-screen-shot-upload',
  templateUrl: './screen-shot-upload.component.html',
  styleUrls: ['./screen-shot-upload.component.scss'],
})
export class ScreenShotUploadComponent implements OnInit {
  uploadForm: FormGroup;
  checkForm: boolean = false;
  upload_date: any = Date();
  urls: any = [];
  id: any;
  updateFile: any;

  mainImg: any;
  selectedFiles?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];
  fileInfos?: Observable<any>;

  constructor(
    public _auth: AuthService,
    private _fb: FormBuilder,
    private _upload: UploadFileService,
    private _router: Router,
    private _params: ActivatedRoute
  ) {
    this.uploadForm = this._fb.group({
      compName: ['', Validators.required],
      type: ['', Validators.required],
      platform: ['', Validators.required],
      category: ['', Validators.required],
      screen_shot: ['', Validators.required],
      upload_date: this.upload_date,
      typeset: '',
      _id: null,
      __v: null,
    });

    this.id = _params.snapshot.paramMap.get('id');
    _upload.getImagesById(this.id).subscribe((result) => {
      this.updateFile = result;
      this.uploadForm.setValue(result);
    });
  }

  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
  }

  uploadFiles(): void {
    this.message = [];

    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
      }
    }
  }

  upload(idx: number, file: File): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name };

    if (file) {
      this._upload.upload(file, this.uploadForm.value).subscribe({
        next: (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfos[idx].value = Math.round(
              (100 * event.loaded) / event.total
            );
          } else if (event instanceof HttpResponse) {
            const msg = 'Uploaded the file successfully: ' + file.name;
            this.message.push(msg);
            this.fileInfos = this._upload.getFiles();
            this._router.navigate(['/admin/screen/list']);
          }
        },
        error: (err: any) => {
          this.progressInfos[idx].value = 0;
          const msg = 'Could not upload the file: ' + file.name;
          this.message.push(msg);
          this.fileInfos = this._upload.getFiles();
        },
      });
    }
  }

  submit() {
    if (this.uploadForm.invalid) {
      this.checkForm = true;
    }
    if (this.id) {
      this._upload
        .updateImages(this.id, this.uploadForm)
        .subscribe((result) => {});
    }
  }

  Category: any = [
    'business',
    'education',
    'entertainment',
    'finance',
    'food & Drink',
    'health & Fitness',
    'lifestyle',
    'medical',
    'music',
    'navigation',
    'news',
    'photo & Video',
    'productivity',
    'reference',
    'shopping',
    'socisl Networking',
    'sports',
    'travel',
    'utilities',
  ];
  Platform: any = ['android', 'ios'];

  ngOnInit(): void {
    this.fileInfos = this._upload.getFiles();
  }
}
