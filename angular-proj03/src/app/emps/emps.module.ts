import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpsRoutingModule } from './emps-routing.module';
import { EmpsComponent } from './emps.component';


@NgModule({
  declarations: [EmpsComponent],
  imports: [
    CommonModule,
    EmpsRoutingModule
  ]
})
export class EmpsModule { }
