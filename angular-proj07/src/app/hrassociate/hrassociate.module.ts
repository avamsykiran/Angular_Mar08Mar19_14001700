import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrassociateRoutingModule } from './hrassociate-routing.module';
import { HrassociateComponent } from './hrassociate.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [HrassociateComponent],
  imports: [
    CommonModule,
    HrassociateRoutingModule,
    MaterialModule
  ]
})
export class HrassociateModule { }
