import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeptsRoutingModule } from './depts-routing.module';
import { DeptsComponent } from './depts.component';


@NgModule({
  declarations: [DeptsComponent],
  imports: [
    CommonModule,
    DeptsRoutingModule
  ]
})
export class DeptsModule { }
