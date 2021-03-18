import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrassociateRoutingModule } from './hrassociate-routing.module';
import { HrassociateComponent } from './hrassociate.component';


@NgModule({
  declarations: [HrassociateComponent],
  imports: [
    CommonModule,
    HrassociateRoutingModule
  ]
})
export class HrassociateModule { }
