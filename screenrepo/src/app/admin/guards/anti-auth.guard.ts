import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AntiAuthGuard implements CanActivate {
  constructor(private _auth: AuthService, private _router: Router) {}
  canActivate() {
    if (this._auth.isLoggedIn()) {
      this._router.navigate(['/admin/screen/upload']);
      return false;
    } else {
      return true;
    }
  }
}
