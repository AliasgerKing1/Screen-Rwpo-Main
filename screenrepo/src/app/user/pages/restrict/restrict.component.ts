import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-restrict',
  templateUrl: './restrict.component.html',
  styleUrls: ['./restrict.component.scss'],
})
export class RestrictComponent {
  maxScrollPosition = 700; // set this to the maximum number of pixels allowed
  @HostListener('window:scroll')
  onScroll() {
    this.updateScrollPosition();
  }
  constructor(private router: Router, private _auth: AuthService) {}
  updateScrollPosition() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (scrollPosition > this.maxScrollPosition) {
      if (!this._auth.isLoggedIn()) {
        this.router.navigate(['/admin']); // replace '/login' with the route to your login page
      }
    }
  }
}
