import { Component } from '@angular/core';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-screenshot-list',
  templateUrl: './screenshot-list.component.html',
  styleUrls: ['./screenshot-list.component.scss'],
})
export class ScreenshotListComponent {
  allImages: any = [];
  typeForm: FormGroup;
  CheckForm = false;
  indexNum: any;
  allObj: any = [];

  ids: any = [];
  checkSelected: boolean = false;
  type: any = ['Select', 'Login', 'Register', 'User', 'Admin'];
  constructor(
    private _upload: UploadFileService,
    public _auth: AuthService,
    private _fb: FormBuilder
  ) {
    this._upload.getImages().subscribe((result) => {
      this.allImages = [result][0];
    });
    this.typeForm = this._fb.group({
      typeset: '',
    });
  }

  onCheckBoxChange(event: any) {
    if (this.ids.length > -1) {
      this.checkSelected = true;
    }
    const checkBoxId = event.target.id;

    this.ids.push(checkBoxId);
    let n = 0;
    for (let i = 0; i < this.ids.length; i++) {
      if (this.ids[i] == checkBoxId) {
        n++;
      }
    }
    if (n > 1) {
      this.ids.splice(this.ids.length - 1, 1);
      return;
    }
    return n;
  }

  askDelete(Number: any, obj: any) {
    this.indexNum = Number;
    this.allObj = obj;
  }

  confDelete(btn: any) {
    console.log(this.ids);
    this._upload.deleteImages(this.ids).subscribe((result) => {
      if (result.status === 200) {
        let n = this.allImages.indexOf(this.allObj);
        this.allImages.splice(n, 1);
        btn.click();
      }
    });
  }

  confMultiDelete(btn: any) {
    console.log(this.ids);
    this._upload.deleteMultiImages(this.ids).subscribe((result) => {
      if (result.status === 200) {
        let n = this.allImages.indexOf(this.allObj);
        this.allImages.splice(n, 1);
        btn.click();
      }
    });
  }

  changeType() {
    this._upload
      .updateTypeInImages(this.ids, this.typeForm.value)
      .subscribe((result) => {
        console.log(result);
        if (result.status === 200) {
          this.typeForm.reset();
          this.checkSelected = false;
        }
      });
  }
}
