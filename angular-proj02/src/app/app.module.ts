import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpFormComponent } from './emp-form/emp-form.component';
import { HomeComponent } from './home/home.component';
import { EmpsComponent } from './emps/emps.component';
import { DeptsComponent } from './depts/depts.component';
import { DeptsListComponent } from './depts-list/depts-list.component';
import { DeptsFormComponent } from './depts-form/depts-form.component';
import { DeptViewComponent } from './dept-view/dept-view.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    EmpFormComponent,
    HomeComponent,
    EmpsComponent,
    DeptsComponent,
    DeptsListComponent,
    DeptsFormComponent,
    DeptViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
