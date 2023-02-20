import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AntiAuthGuard } from './guards/anti-auth.guard';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { ScreenShotUploadComponent } from './pages/screen-shot-upload/screen-shot-upload.component';
import { ScreenshotListComponent } from './pages/screenshot-list/screenshot-list.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
        canActivate: [AntiAuthGuard],
      },
      {
        path: 'screen/upload',
        component: ScreenShotUploadComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'screen/list',
        component: ScreenshotListComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
