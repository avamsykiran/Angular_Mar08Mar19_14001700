import { Component, OnInit } from '@angular/core';
import { DeptService } from 'src/app/core/dept.service';
import { EmpService } from 'src/app/core/emp.service';
import { Employee } from 'src/app/core/model/employee';

@Component({
  selector: 'app-emps-list',
  templateUrl: './emps-list.component.html',
  styleUrls: ['./emps-list.component.css']
})
export class EmpsListComponent implements OnInit {

  emps:Employee[];
  msg:string;
  constructor(private empService:EmpService,private deptService:DeptService) { 
    this.msg="Loading Data! Please Wait....";
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.empService.getAll().subscribe(
      (data) => {
        this.emps=data;
        this.emps.forEach(
          e => {
            this.deptService.getNameById(e.deptId)
            .subscribe(dnm => e.deptName=dnm)
          }
        );
      },
      (err) => {this.msg = err.message?err.message:err; },
      () => {this.msg=null;}
    );
  }

  delete(id:number){
    this.empService.delete(id).subscribe(
      () => {
        this.loadData();
      },
      (err) => {this.msg = err.message?err.message:err; },
      () => {this.msg=null;}
    );
  }
}
