import { Component, OnInit } from '@angular/core';
import { DeptService } from '../core/dept.service';
import { Department } from '../core/model/department';

@Component({
  selector: 'app-depts',
  templateUrl: './depts.component.html',
  styleUrls: ['./depts.component.scss']
})
export class DeptsComponent implements OnInit {
  depts:Department[];
  msg:string;

  constructor(private deptService:DeptService) { 
    this.msg="Loading Data! Please Wait..!"
    this.depts=null;
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.deptService.getAll().subscribe(
      (data)=>{this.depts=data;},
      (err)=>{this.msg=err.message?err.message:err;},
      ()=>{this.msg=null;}
    );
  }

  addDept(dept:Department){
    this.msg="Please wit while we load data...!";
    this.deptService.add(dept).subscribe(
      (data)=>{this.loadData();},
      (err)=>{this.msg=err.message?err.message:err;},
      ()=>{this.msg=null;}
    );
  }

  updateDept(dept:Department){
    this.msg="Please wit while we load data...!";
    this.deptService.update(dept).subscribe(
      (data)=>{this.loadData();},
      (err)=>{this.msg=err.message?err.message:err;},
      ()=>{this.msg=null;}
    );
  }

  delete(id:number){
    this.msg="Please wit while we load data...!";
    this.deptService.delete(id).subscribe(
      ()=>{this.loadData();},
      (err)=>{this.msg=err.message?err.message:err;},
      ()=>{this.msg=null;}
    );
  }

  edit(id:number){
    this.depts.find(d => d.id==id).isEditing=true;
  }
  
  cancelEdit(id:number){
    this.depts.find(d => d.id==id).isEditing=false;
  }

}
