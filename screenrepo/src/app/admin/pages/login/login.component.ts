import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  checkForm: boolean = false;
  errMsg: String = '';
  constructor(
    private _fb: FormBuilder,
    private _admin: AdminService,
    private _router: Router
  ) {
    this.loginForm = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  submit() {
    if (this.loginForm.invalid) {
      this.checkForm = true;
      return;
    }

    this._admin.addAdmin(this.loginForm.value).subscribe((result) => {
      console.log(result);
      if (result.success == true) {
        localStorage.setItem('token', result.token);
        this._router.navigate(['/admin/screen/upload']);
      } else {
        if (result.errType == 1) {
          this.errMsg = 'This Username/Email is Incorrect !';
        }
        if (result.errType == 2) {
          this.errMsg = 'ThisPassword is Incorrect !';
        }
      }
    });
  }
}
