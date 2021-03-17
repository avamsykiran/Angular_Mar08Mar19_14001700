import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
@NgModule({
  imports: [
    CommonModule,
    MatBadgeModule,
    MatButtonToggleModule,
    MatButtonModule
  ],
  exports:[    
    MatBadgeModule,
    MatButtonToggleModule,
    MatButtonModule
  ],
  providers:[
    MatDialog
  ]
})
export class MaterialModule { }
