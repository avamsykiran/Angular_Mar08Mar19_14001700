import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DeptsRoutingModule } from './depts-routing.module';
import { DeptsComponent } from './depts.component';
import { DeptViewComponent } from './dept-view/dept-view.component';
import { DeptsFormComponent } from './depts-form/depts-form.component';

@NgModule({
  declarations: [DeptsComponent, DeptViewComponent, DeptsFormComponent],
  imports: [
    CommonModule,
    DeptsRoutingModule,
    FormsModule
  ]
})
export class DeptsModule { }
