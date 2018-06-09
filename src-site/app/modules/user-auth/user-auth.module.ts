import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAuthRoutingModule } from './user-auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { ForgotRedirectComponent } from './pages/forgot-redirect/forgot-redirect.component';
import { ConfirmPasswordComponent } from './pages/confirm-password/confirm-password.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileEditComponent } from './pages/profile-edit/profile-edit.component';
import { UserAuthComponent } from './user-auth.component';
import { AuthMethodsComponent } from './components/auth-methods/auth-methods.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material.module';
import { UserStateService } from '../../shared/services/user-state.service';

@NgModule({
  imports: [CommonModule, UserAuthRoutingModule, ReactiveFormsModule, FormsModule, MaterialModule],
  declarations: [
    LoginComponent,
    RegistrationComponent,
    ForgotComponent,
    ForgotRedirectComponent,
    ConfirmPasswordComponent,
    ProfileComponent,
    ProfileEditComponent,
    UserAuthComponent,
    AuthMethodsComponent
  ],
  providers: [UserStateService]
})
export class UserAuthModule {}
