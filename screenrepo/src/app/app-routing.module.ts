import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./user/user.module').then((u) => u.UserModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((a) => a.AdminModule),
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
