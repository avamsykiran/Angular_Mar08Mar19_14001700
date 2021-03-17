import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { EmpService } from './emp.service';
import { DeptService } from './dept.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule    
  ],
  providers:[
    EmpService,DeptService
  ]
})
export class CoreModule { }
