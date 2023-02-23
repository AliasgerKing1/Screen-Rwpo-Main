import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HomeComponent } from './pages/home/home.component';
import { ScreenshotComponent } from './shared/screenshot/screenshot.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SearchbarComponent } from './shared/searchbar/searchbar.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';
import { ScrollRestrictModalComponent } from './pages/scroll-restrict-modal/scroll-restrict-modal.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    UserComponent,
    HomeComponent,
    ScreenshotComponent,
    SidebarComponent,
    SearchbarComponent,
    SinglepageComponent,
    ScrollRestrictModalComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [CommonModule, UserRoutingModule, ReactiveFormsModule],
})
export class UserModule {}
