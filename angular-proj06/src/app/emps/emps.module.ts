import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpsRoutingModule } from './emps-routing.module';
import { EmpsComponent } from './emps.component';
import { EmpsListComponent } from './emps-list/emps-list.component';
import { EmpsFormComponent } from './emps-form/emps-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmpsComponent, EmpsListComponent, EmpsFormComponent ],
  imports: [
    CommonModule,
    EmpsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EmpsModule { }
