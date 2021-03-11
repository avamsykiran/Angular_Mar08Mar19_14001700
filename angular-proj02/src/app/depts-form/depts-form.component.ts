import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Department } from '../model/department';

@Component({
  selector: 'app-depts-form',
  templateUrl: './depts-form.component.html',
  styleUrls: ['./depts-form.component.css']
})
export class DeptsFormComponent implements OnInit {

  dept:Department;

  @Output()
  onSaveDept:EventEmitter<Department>;

  constructor() { 
    this.dept=new Department();
    this.onSaveDept=new EventEmitter<Department>();
  }

  ngOnInit(): void {
  }

  deptFormSubmited(){
    this.onSaveDept.emit(this.dept);
    this.dept=new Department();
  }
}
