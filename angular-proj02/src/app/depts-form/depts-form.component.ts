import { Component, OnInit } from '@angular/core';
import { Department } from '../model/department';

@Component({
  selector: 'app-depts-form',
  templateUrl: './depts-form.component.html',
  styleUrls: ['./depts-form.component.css']
})
export class DeptsFormComponent implements OnInit {

  dept:Department;

  constructor() { 
    this.dept=new Department();
  }

  ngOnInit(): void {
  }

}
