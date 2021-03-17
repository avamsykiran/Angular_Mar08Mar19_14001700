import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Department } from 'src/app/core/model/department';

@Component({
  selector: 'app-depts-form',
  templateUrl: './depts-form.component.html',
  styleUrls: ['./depts-form.component.scss']
})
export class DeptsFormComponent implements OnInit {

  @Input()
  dept:Department;

  @Input()
  isUpdating:boolean;

  @Output()
  onSaveDept:EventEmitter<Department>;
 
  @Output()
  onCancelEdit:EventEmitter<number>;
 
  constructor() { 
    this.dept=new Department();
    this.onSaveDept=new EventEmitter<Department>();
    this.onCancelEdit=new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  deptFormSubmited(){
    this.onSaveDept.emit(this.dept);
    this.dept=new Department();
  }

  notifyCancelEdit(){
    this.onCancelEdit.emit(this.dept.id);
  }
}
