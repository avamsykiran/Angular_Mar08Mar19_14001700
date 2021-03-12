import { Component, OnInit } from '@angular/core';
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
  constructor(private empService:EmpService) { 
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
