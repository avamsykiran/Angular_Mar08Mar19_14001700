import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  emps:Employee[];
  msg:string;
  constructor(private empService:EmployeeService) { 
    this.msg="Loading Data! Please Wait....";
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.empService.getAll().subscribe(
      (data) => {this.emps=data;},
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
