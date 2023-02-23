import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  checkForm = false;
  constructor(private _fb: FormBuilder) {
    this.registerForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      re_pass: ['', Validators.required],
      agree_term: ['', Validators.required],
    });
  }

  submit() {
    if (this.registerForm.invalid) {
      this.checkForm = true;
    }
  }
}
