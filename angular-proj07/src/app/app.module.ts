import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MaterialModule} from './material/material.module';
import { SharedModule } from './shared/shared.module'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './shared/jwt.interceptor';
import { ErrorHandlerInterceptor } from './shared/error-handler.interceptor';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    AuthModule    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptor},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorHandlerInterceptor}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
