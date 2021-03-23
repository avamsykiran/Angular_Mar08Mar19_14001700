import { Component, OnInit } from '@angular/core';
import { DeptService } from 'src/app/shared/dept.service';
import { Department } from 'src/app/shared/model/department';

@Component({
  selector: 'app-depts',
  templateUrl: './depts.component.html',
  styleUrls: ['./depts.component.css']
})
export class DeptsComponent implements OnInit {

  displayedColumns: string[];
  dataSource: Department[];
  constructor(private deptService:DeptService) { 
    this.displayedColumns =  ['id', 'name'];
    this.dataSource=[];
  }

  ngOnInit(): void {
    this.deptService.getAll().subscribe(
      (data) => {this.dataSource=data;}
    );
  }

}
