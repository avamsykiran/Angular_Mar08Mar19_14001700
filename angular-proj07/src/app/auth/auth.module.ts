import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [LoginComponent, CreateUserComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ]
})
export class AuthModule { }
