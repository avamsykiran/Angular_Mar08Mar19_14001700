import { Component, Input, OnInit } from '@angular/core';
import { Department } from '../model/department';

@Component({
  selector: 'app-dept-view',
  templateUrl: './dept-view.component.html',
  styleUrls: ['./dept-view.component.css']
})
export class DeptViewComponent implements OnInit {

  @Input()
  dept:Department;

  constructor() { 
    this.dept=null;
  }

  ngOnInit(): void {
  }

}
