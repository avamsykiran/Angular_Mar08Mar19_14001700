import { Component, OnInit } from '@angular/core';
import { Department } from '../model/department';
import { DepartmentService } from '../service/department.service';

@Component({
  selector: 'app-depts',
  templateUrl: './depts.component.html',
  styleUrls: ['./depts.component.css']
})
export class DeptsComponent implements OnInit {

  depts:Department[];
  msg:string;

  constructor(private deptService:DepartmentService) { 
    this.msg="Loading Data! Please Wait..!"
    this.depts=null;
  }

  ngOnInit(): void {
    this.deptService.getAll().subscribe(
      (data)=>{this.depts=data;},
      (err)=>{this.msg=err.message?err.message:err;},
      ()=>{this.msg=null;}
    );
  }

  addDept(dept:Department){
    this.msg="Please wit while we load data...!";
    this.deptService.add(dept).subscribe(
      (data)=>{this.depts.push(data);},
      (err)=>{this.msg=err.message?err.message:err;},
      ()=>{this.msg=null;}
    );
  }
}
