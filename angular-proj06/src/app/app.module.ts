import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import { ErrorHandlingInterceptor } from './error-handling.interceptor';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,   
    MaterialModule
  ],
  providers: [    
    {provide:HTTP_INTERCEPTORS,useClass:ErrorHandlingInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
