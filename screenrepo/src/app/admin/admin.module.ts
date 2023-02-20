import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './pages/login/login.component';
import { ScreenShotUploadComponent } from './pages/screen-shot-upload/screen-shot-upload.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ScreenshotListComponent } from './pages/screenshot-list/screenshot-list.component';
import { DelModalComponent } from './shared/del-modal/del-modal.component';

@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    ScreenShotUploadComponent,
    NavbarComponent,
    ScreenshotListComponent,
    DelModalComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule, FormsModule],
})
export class AdminModule {}
