import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpsRoutingModule } from './emps-routing.module';
import { EmpsComponent } from './emps.component';
import { EmpsListComponent } from './emps-list/emps-list.component';
import { EmpsFormComponent } from './emps-form/emps-form.component';

@NgModule({
  declarations: [EmpsComponent, EmpsListComponent, EmpsFormComponent ],
  imports: [
    CommonModule,
    EmpsRoutingModule
  ]
})
export class EmpsModule { }
